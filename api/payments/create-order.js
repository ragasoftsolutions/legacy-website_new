const NGENIUS_BASE_URL = process.env.NGENIUS_BASE_URL || 'https://api-gateway.ngenius-payments.com'
const NGENIUS_CURRENCY = process.env.NGENIUS_CURRENCY || 'AED'

const sendJson = (res, statusCode, body) => {
  res.status(statusCode)
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(body))
}

const getAccessToken = async (apiKey) => {
  const tokenResponse = await fetch(`${NGENIUS_BASE_URL}/identity/auth/access-token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${apiKey}`,
      'Content-Type': 'application/vnd.ni-identity.v1+json',
      Accept: 'application/vnd.ni-identity.v1+json',
    },
  })

  if (!tokenResponse.ok) {
    const errorText = await tokenResponse.text()
    throw new Error(`Token request failed (${tokenResponse.status}): ${errorText}`)
  }

  const tokenData = await tokenResponse.json()
  return tokenData.access_token
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { success: false, error: 'Method not allowed' })
  }

  try {
    const apiKey = process.env.NGENIUS_API_KEY
    const outletRef = process.env.NGENIUS_OUTLET_REF
    const successUrl = process.env.PAYMENT_SUCCESS_URL
    const cancelUrl = process.env.PAYMENT_CANCEL_URL

    if (!apiKey || !outletRef || !successUrl || !cancelUrl) {
      return sendJson(res, 500, {
        success: false,
        error: 'Missing required payment environment variables',
      })
    }

    const { amount, customerEmail, customerName, description, merchantOrderReference } = req.body || {}

    if (!amount || Number.isNaN(Number(amount)) || Number(amount) <= 0) {
      return sendJson(res, 400, { success: false, error: 'Invalid amount' })
    }

    if (!customerEmail || !customerName || !merchantOrderReference) {
      return sendJson(res, 400, {
        success: false,
        error: 'Missing customerEmail, customerName, or merchantOrderReference',
      })
    }

    const amountInMinorUnits = Math.round(Number(amount) * 100)
    const [firstName, ...lastNames] = String(customerName).trim().split(' ')
    const accessToken = await getAccessToken(apiKey)

    const payload = {
      action: 'SALE',
      amount: {
        currencyCode: NGENIUS_CURRENCY,
        value: amountInMinorUnits,
      },
      merchantAttributes: {
        redirectUrl: successUrl,
        cancelUrl: cancelUrl,
      },
      emailAddress: customerEmail,
      billingAddress: {
        firstName: firstName || customerName,
        lastName: lastNames.join(' ') || ' ',
      },
      merchantOrderReference,
      merchantDefinedData: {
        description: description || 'Payment request',
      },
    }

    const orderResponse = await fetch(
      `${NGENIUS_BASE_URL}/transactions/outlets/${outletRef}/orders`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/vnd.ni-payment.v2+json',
          Accept: 'application/vnd.ni-payment.v2+json',
        },
        body: JSON.stringify(payload),
      }
    )

    const orderData = await orderResponse.json()

    if (!orderResponse.ok) {
      return sendJson(res, orderResponse.status, {
        success: false,
        error: orderData,
      })
    }

    return sendJson(res, 200, {
      success: true,
      orderRef: orderData._id,
      paymentLink: orderData._links?.payment?.href,
      data: orderData,
    })
  } catch (error) {
    return sendJson(res, 500, {
      success: false,
      error: error.message || 'Failed to create payment order',
    })
  }
}
