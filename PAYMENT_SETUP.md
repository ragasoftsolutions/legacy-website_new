# N-Genius Payment Gateway Setup

## Production Setup Without Separate Backend

You can run payments without a separate backend service by using Vercel serverless functions in this same project:

- `api/payments/create-order.js`
- `api/payments/order-status.js`

The frontend now calls `/api/payments/*`, and these serverless functions call N-Genius securely with server-side environment variables.

### Required Vercel Environment Variables

Set these in your Vercel project settings:

- `NGENIUS_API_KEY`
- `NGENIUS_OUTLET_REF`
- `NGENIUS_BASE_URL` (usually `https://api-gateway.ngenius-payments.com`)
- `NGENIUS_CURRENCY` (for example `AED`)
- `PAYMENT_SUCCESS_URL`
- `PAYMENT_CANCEL_URL`
- `VITE_NGENIUS_CURRENCY` (client-side display only)

Important: do not use `VITE_` prefix for secret keys (`NGENIUS_API_KEY`, `NGENIUS_OUTLET_REF`). Any `VITE_` variable is exposed to the browser.

## Error: "Invalid redirect url"

The N-Genius payment gateway requires redirect URLs to be **registered** in your merchant dashboard before they can be used.

## Required Steps:

### 1. Register Redirect URLs in N-Genius Dashboard

Log in to your N-Genius merchant portal and register these URLs:

**For Development:**
- Success URL: `http://localhost:5173/payment-success`
- Cancel URL: `http://localhost:5173/payment-cancel`

**For Production:**
- Success URL: `https://yourdomain.com/payment-success`
- Cancel URL: `https://yourdomain.com/payment-cancel`

### 2. Update .env File

The `.env` / Vercel environment has redirect URL variables:

```env
VITE_PAYMENT_SUCCESS_URL=http://localhost:5173/payment-success
VITE_PAYMENT_CANCEL_URL=http://localhost:5173/payment-cancel
```

**For production deployment**, update these to your actual domain:

```env
VITE_PAYMENT_SUCCESS_URL=https://yourdomain.com/payment-success
VITE_PAYMENT_CANCEL_URL=https://yourdomain.com/payment-cancel
```

### 3. Testing Options

If you cannot register localhost URLs in N-Genius dashboard:

**Option A: Use ngrok (Recommended for testing)**
1. Install ngrok: https://ngrok.com/
2. Run: `ngrok http 5173`
3. Copy the https URL (e.g., `https://abc123.ngrok.io`)
4. Register in N-Genius:
   - `https://abc123.ngrok.io/payment-success`
   - `https://abc123.ngrok.io/payment-cancel`
5. Update .env:
   ```env
   VITE_PAYMENT_SUCCESS_URL=https://abc123.ngrok.io/payment-success
   VITE_PAYMENT_CANCEL_URL=https://abc123.ngrok.io/payment-cancel
   ```

**Option B: Deploy to staging server**
- Deploy to a test server (Vercel, Netlify, etc.)
- Register the staging URLs in N-Genius dashboard
- Test with the staging environment

### 4. Restart Dev Server

After updating .env, restart the dev server:

```bash
npm run dev
```

## Common Issues

### URLs not registered in dashboard
**Error:** `Invalid redirect url`  
**Solution:** Ensure both success and cancel URLs are registered in N-Genius merchant dashboard

### HTTP vs HTTPS
**Error:** N-Genius may require HTTPS in production  
**Solution:** Use HTTPS URLs for production deployment

### Trailing slashes
**Error:** URL mismatch  
**Solution:** Ensure URLs in .env exactly match those registered (with or without trailing slashes)

## Contact N-Genius Support

If you continue to experience issues:
- Contact N-Genius merchant support
- Request to whitelist your redirect URLs
- Ask about test/sandbox environment URLs
