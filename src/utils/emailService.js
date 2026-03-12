import axios from 'axios'

// ZeptoMail Configuration
// Use proxy in development to avoid CORS issues
const ZEPTOMAIL_API_URL = import.meta.env.DEV 
  ? '/api/zeptomail/v1.1/email' 
  : import.meta.env.VITE_ZEPTOMAIL_API_URL || 'https://api.zeptomail.in/v1.1/email'
const ZEPTOMAIL_API_KEY = import.meta.env.VITE_ZEPTOMAIL_API_KEY
const EMAIL_FROM = import.meta.env.VITE_EMAIL_FROM || 'noreply@legacymigadv.com'
const EMAIL_FROM_NAME = import.meta.env.VITE_EMAIL_FROM_NAME || 'Legacy Migration Advisory'
const EMAIL_RECIPIENT = 'rahulvashisth052@gmail.com'

/**
 * Send email using ZeptoMail REST API
 * @param {Object} params - Email parameters
 * @param {string} params.to - Recipient email
 * @param {string} params.subject - Email subject
 * @param {string} params.htmlContent - HTML content
 * @returns {Promise<Object>}
 */
const sendZeptoMail = async ({ to, subject, htmlContent }) => {
  try {
    console.log('Sending email via ZeptoMail...')
    console.log('To:', to)
    console.log('Subject:', subject)

    const payload = {
      from: {
        address: EMAIL_FROM,
        name: EMAIL_FROM_NAME,
      },
      to: [
        {
          email_address: {
            address: to,
            name: to.split('@')[0],
          },
        },
      ],
      subject: subject,
      htmlbody: htmlContent,
    }

    const response = await axios.post(ZEPTOMAIL_API_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Zoho-enczapikey ${ZEPTOMAIL_API_KEY}`,
        'Accept': 'application/json',
      },
    })

    console.log('Email sent successfully:', response.data)
    return { success: true, data: response.data }
  } catch (error) {
    console.error('ZeptoMail Error:', error)
    console.error('Error details:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message,
    })
    
    return {
      success: false,
      error: error.response?.data || error.message,
    }
  }
}

/**
 * Send contact form email
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>}
 */
export const sendContactEmail = async (formData) => {
  const subject = `New Contact Form Submission - ${formData.fullName}`
  
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 0;">
        <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a3a2e 0%, #2d5a47 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #d4af37; font-size: 28px; font-weight: 700;">Legacy Migration Advisory</h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.9;">New Contact Form Submission</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1a3a2e; font-size: 22px;">Contact Details</h2>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Full Name</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.fullName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;"><a href="mailto:${formData.email}" style="color: #d4af37; text-decoration: none;">${formData.email}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;"><a href="tel:${formData.phone}" style="color: #d4af37; text-decoration: none;">${formData.phone}</a></p>
                  </td>
                </tr>
                ${formData.alternatePhone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Alternate Phone</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;"><a href="tel:${formData.alternatePhone}" style="color: #d4af37; text-decoration: none;">${formData.alternatePhone}</a></p>
                  </td>
                </tr>
                ` : ''}
                ${formData.country ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Country</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.country}</p>
                  </td>
                </tr>
                ` : ''}
                ${formData.visaType ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Visa Type</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.visaType}</p>
                  </td>
                </tr>
                ` : ''}
                ${formData.nationality ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Nationality</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.nationality}</p>
                  </td>
                </tr>
                ` : ''}
                ${formData.dob ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Date of Birth</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.dob}</p>
                  </td>
                </tr>
                ` : ''}
                ${formData.passportNumber ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Passport Number</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.passportNumber}</p>
                  </td>
                </tr>
                ` : ''}
                ${formData.age ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Age</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.age}</p>
                  </td>
                </tr>
                ` : ''}
                ${formData.education ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Education</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.education}</p>
                  </td>
                </tr>
                ` : ''}
                ${formData.currentResidence ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Current Residence</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.currentResidence}</p>
                  </td>
                </tr>
                ` : ''}
                ${formData.currentOccupation ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Current Occupation</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.currentOccupation}</p>
                  </td>
                </tr>
                ` : ''}
                ${formData.timeline ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Timeline</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.timeline}</p>
                  </td>
                </tr>
                ` : ''}
                ${formData.workExperience ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Work Experience</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.workExperience}</p>
                  </td>
                </tr>
                ` : ''}
                ${formData.additionalComments ? `
                <tr>
                  <td style="padding: 12px 0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Additional Comments</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px; white-space: pre-wrap;">${formData.additionalComments}</p>
                  </td>
                </tr>
                ` : ''}
              </table>
              
              <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #d4af37;">
                <p style="margin: 0; color: #666666; font-size: 13px; line-height: 1.6;">
                  <strong style="color: #1a3a2e;">Action Required:</strong> Please respond to this inquiry within 24 hours.
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f4f4f4; padding: 30px; text-align: center;">
              <p style="margin: 0 0 10px 0; color: #999999; font-size: 12px;">
                This email was sent from the Legacy Migration Advisory contact form
              </p>
              <p style="margin: 0; color: #999999; font-size: 12px;">
                2405, Single Business Tower, Business Bay, Dubai, UAE
              </p>
              <p style="margin: 10px 0 0 0; color: #999999; font-size: 12px;">
                <a href="tel:+971565586006" style="color: #d4af37; text-decoration: none;">+971 565586006</a> | 
                <a href="mailto:info@legacymigadv.com" style="color: #d4af37; text-decoration: none;">info@legacymigadv.com</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `

  return sendZeptoMail({
    to: EMAIL_RECIPIENT,
    subject,
    htmlContent,
  })
}

/**
 * Send payment request email
 * @param {Object} formData - Payment form data
 * @returns {Promise<Object>}
 */
export const sendPaymentEmail = async (formData) => {
  const subject = `Payment Request - ${formData.name} - AED ${formData.amount || 'TBD'}`
  
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 0;">
        <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a3a2e 0%, #2d5a47 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #d4af37; font-size: 28px; font-weight: 700;">Legacy Migration Advisory</h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.9;">Payment Request Received</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <div style="background-color: #d4af37; color: #1a3a2e; padding: 20px; text-align: center; margin-bottom: 30px; border-radius: 4px;">
                <p style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">Payment Amount</p>
                <h2 style="margin: 10px 0 0 0; font-size: 36px; font-weight: 700;">AED ${formData.amount || 'To Be Determined'}</h2>
              </div>
              
              <h2 style="margin: 0 0 20px 0; color: #1a3a2e; font-size: 22px;">Customer Details</h2>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;"><a href="mailto:${formData.email}" style="color: #d4af37; text-decoration: none;">${formData.email}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;"><a href="tel:${formData.phone}" style="color: #d4af37; text-decoration: none;">${formData.phone}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Service Type</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px;">${formData.serviceType}</p>
                  </td>
                </tr>
                ${formData.notes ? `
                <tr>
                  <td style="padding: 12px 0;">
                    <strong style="color: #1a3a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Additional Notes</strong>
                    <p style="margin: 5px 0 0 0; color: #333333; font-size: 15px; white-space: pre-wrap;">${formData.notes}</p>
                  </td>
                </tr>
                ` : ''}
              </table>
              
              <div style="margin-top: 30px; padding: 20px; background-color: #fff3cd; border-left: 4px solid #d4af37;">
                <p style="margin: 0; color: #856404; font-size: 13px; line-height: 1.6;">
                  <strong style="color: #1a3a2e;">Action Required:</strong> Please initiate the payment process with this customer within 24 hours.
                </p>
              </div>
              
              <div style="margin-top: 20px; padding: 20px; background-color: #f9f9f9; border-radius: 4px;">
                <h3 style="margin: 0 0 15px 0; color: #1a3a2e; font-size: 16px;">Next Steps:</h3>
                <ol style="margin: 0; padding-left: 20px; color: #666666; font-size: 14px; line-height: 1.8;">
                  <li>Verify customer details and service agreement</li>
                  <li>Generate payment link via N-Genius gateway</li>
                  <li>Send payment instructions to customer email</li>
                  <li>Follow up if payment not received within 48 hours</li>
                </ol>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f4f4f4; padding: 30px; text-align: center;">
              <p style="margin: 0 0 10px 0; color: #999999; font-size: 12px;">
                This email was sent from the Legacy Migration Advisory payment portal
              </p>
              <p style="margin: 0; color: #999999; font-size: 12px;">
                2405, Single Business Tower, Business Bay, Dubai, UAE
              </p>
              <p style="margin: 10px 0 0 0; color: #999999; font-size: 12px;">
                <a href="tel:+971565586006" style="color: #d4af37; text-decoration: none;">+971 565586006</a> | 
                <a href="mailto:info@legacymigadv.com" style="color: #d4af37; text-decoration: none;">info@legacymigadv.com</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `

  return sendZeptoMail({
    to: EMAIL_RECIPIENT,
    subject,
    htmlContent,
  })
}
