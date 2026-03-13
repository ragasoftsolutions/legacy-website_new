const NGENIUS_BASE_URL = process.env.NGENIUS_BASE_URL || 'https://api-gateway.ngenius-payments.com'

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
  if (req.method !== 'GET') {
    return sendJson(res, 405, { success: false, error: 'Method not allowed' })
  }

  try {
    const apiKey = process.env.NGENIUS_API_KEY
    const outletRef = process.env.NGENIUS_OUTLET_REF

    if (!apiKey || !outletRef) {
      return sendJson(res, 500, {
        success: false,
        error: 'Missing required payment environment variables',
      })
    }

    const orderRef = req.query?.orderRef
    if (!orderRef) {
      return sendJson(res, 400, { success: false, error: 'Missing orderRef' })
    }

    const accessToken = await getAccessToken(apiKey)
    const response = await fetch(
      `${NGENIUS_BASE_URL}/transactions/outlets/${outletRef}/orders/${encodeURIComponent(orderRef)}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/vnd.ni-payment.v2+json',
        },
      }
    )

    const data = await response.json()

    if (!response.ok) {
      return sendJson(res, response.status, { success: false, error: data })
    }

    return sendJson(res, 200, {
      success: true,
      status: data._embedded?.payment?.[0]?.state,
      data,
    })
  } catch (error) {
    return sendJson(res, 500, {
      success: false,
      error: error.message || 'Failed to fetch order status',
    })
  }
}
