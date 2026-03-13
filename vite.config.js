import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/zeptomail': {
        target: 'https://api.zeptomail.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/zeptomail/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            // Log proxy requests for debugging
            console.log('Proxying:', req.method, req.url, '→', options.target + proxyReq.path)
          })
        }
      },
      '/api/ngenius': {
        target: 'https://api-gateway.ngenius-payments.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/ngenius/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            // Log proxy requests for debugging
            console.log('Proxying:', req.method, req.url, '→', options.target + proxyReq.path)
          })
        }
      }
    }
  }
})
