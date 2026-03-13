import axios from 'axios'

const DEV_USE_NGENIUS_PROXY = import.meta.env.DEV && import.meta.env.VITE_USE_NGENIUS_DEV_PROXY !== 'false'
const NGENIUS_API_KEY = import.meta.env.VITE_NGENIUS_API_KEY
const NGENIUS_OUTLET_REF = import.meta.env.VITE_NGENIUS_OUTLET_REF
const NGENIUS_PROXY_BASE_URL = '/api/ngenius'
const NGENIUS_CURRENCY = import.meta.env.VITE_NGENIUS_CURRENCY

const getAccessTokenViaDevProxy = async () => {
  const response = await axios.post(
    `${NGENIUS_PROXY_BASE_URL}/identity/auth/access-token`,
    {},
    {
      headers: {
        Authorization: `Basic ${NGENIUS_API_KEY}`,
        'Content-Type': 'application/vnd.ni-identity.v1+json',
        Accept: 'application/vnd.ni-identity.v1+json',
      },
    }
  )
  return response.data.access_token
}

/**
 * Create a payment order
 * @param {Object} orderData - Order details
 * @param {number} orderData.amount - Amount in minor units (e.g., 100.00 AED = 10000)
 * @param {string} orderData.customerEmail - Customer email
 * @param {string} orderData.customerName - Customer name
 * @param {string} orderData.description - Order description
 * @param {string} orderData.merchantOrderReference - Unique order reference
 * @returns {Promise<Object>} Payment order response
 */
export const createPaymentOrder = async (orderData) => {
  try {
    if (DEV_USE_NGENIUS_PROXY) {
      const accessToken = await getAccessTokenViaDevProxy()
      const amountInMinorUnits = Math.round(parseFloat(orderData.amount) * 100)
      const paymentSuccessUrl = import.meta.env.VITE_PAYMENT_SUCCESS_URL || `${window.location.origin}/payment-success`
      const paymentCancelUrl = import.meta.env.VITE_PAYMENT_CANCEL_URL || `${window.location.origin}/payment-cancel`

      const payload = {
        action: 'SALE',
        amount: {
          currencyCode: NGENIUS_CURRENCY,
          value: amountInMinorUnits,
        },
        merchantAttributes: {
          redirectUrl: paymentSuccessUrl,
          cancelUrl: paymentCancelUrl,
        },
        emailAddress: orderData.customerEmail,
        billingAddress: {
          firstName: orderData.customerName.split(' ')[0] || orderData.customerName,
          lastName: orderData.customerName.split(' ').slice(1).join(' ') || ' ',
        },
        merchantOrderReference: orderData.merchantOrderReference,
        merchantDefinedData: {
          description: orderData.description,
        },
      }

      const response = await axios.post(
        `${NGENIUS_PROXY_BASE_URL}/transactions/outlets/${NGENIUS_OUTLET_REF}/orders`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/vnd.ni-payment.v2+json',
            Accept: 'application/vnd.ni-payment.v2+json',
          },
        }
      )

      return {
        success: true,
        orderRef: response.data._id,
        paymentLink: response.data._links?.payment?.href,
        data: response.data,
      }
    }

    const response = await axios.post('/api/payments/create-order', orderData)

    return {
      success: true,
      orderRef: response.data._id,
      paymentLink: response.data._links?.payment?.href,
      data: response.data,
    }
  } catch (error) {
    console.error('Payment order creation failed:', error)
    return {
      success: false,
      error: error.response?.data || error.message,
    }
  }
}

/**
 * Get payment order status
 * @param {string} orderRef - Order reference ID
 * @returns {Promise<Object>} Order status
 */
export const getOrderStatus = async (orderRef) => {
  try {
    if (DEV_USE_NGENIUS_PROXY) {
      const accessToken = await getAccessTokenViaDevProxy()
      const response = await axios.get(
        `${NGENIUS_PROXY_BASE_URL}/transactions/outlets/${NGENIUS_OUTLET_REF}/orders/${orderRef}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/vnd.ni-payment.v2+json',
          },
        }
      )

      return {
        success: true,
        status: response.data._embedded?.payment?.[0]?.state,
        data: response.data,
      }
    }

    const response = await axios.get('/api/payments/order-status', {
      params: { orderRef },
    })

    return {
      success: true,
      status: response.data._embedded?.payment?.[0]?.state,
      data: response.data,
    }
  } catch (error) {
    console.error('Failed to get order status:', error)
    return {
      success: false,
      error: error.response?.data || error.message,
    }
  }
}

/**
 * Generate a unique merchant order reference
 * @returns {string} Unique reference
 */
export const generateOrderReference = () => {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 9)
  return `LMA-${timestamp}-${random}`.toUpperCase()
}

/**
 * Format amount for display
 * @param {number} amount - Amount
 * @param {string} currency - Currency code
 * @returns {string} Formatted amount
 */
export const formatAmount = (amount, currency = NGENIUS_CURRENCY) => {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: currency,
  }).format(amount)
}
