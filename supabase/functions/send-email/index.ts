const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY') as string

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface EmailRequest {
  type: 'welcome' | 'video-confirmation' | 'workshop-reminder' | 'dubai-invite'
  to: string
  firstName: string
  workshopName?: string
  workshopDate?: string
}

const getEmailContent = (type: string, firstName: string, workshopName?: string, workshopDate?: string) => {
  const baseStyles = `
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; background-color: #ffffff; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    h1 { color: #333; font-size: 28px; font-weight: bold; margin: 40px 0 20px; }
    h2 { color: #333; font-size: 20px; font-weight: bold; margin: 24px 0 16px; }
    p { color: #333; font-size: 16px; line-height: 26px; margin: 16px 0; }
    .section { background-color: #f9f9f9; border-radius: 8px; padding: 24px; margin: 24px 0; }
    .list-item { color: #333; font-size: 16px; line-height: 26px; margin: 8px 0; }
    a { color: #9b87f5; text-decoration: underline; }
    .signature { color: #666; font-size: 16px; line-height: 26px; margin: 32px 0 0; }
    .congrats { color: #9b87f5; font-size: 18px; font-weight: bold; }
  `

  switch (type) {
    case 'welcome':
      return {
        subject: 'Welcome to LoveDanceLive — Let\'s Get Dancing!',
        html: `
          <html><head><style>${baseStyles}</style></head><body>
            <div class="container">
              <h1>Welcome to LoveDanceLive!</h1>
              <p>Hi ${firstName},</p>
              <p>Thanks for joining LoveDanceLive! You're officially part of a global community where dance meets passion. Whether you're stepping into the spotlight at a live regional event or submitting your moves online, we're excited to see you shine.</p>
              <div class="section">
                <h2>Here's what's next:</h2>
                <p class="list-item">✨ If you signed up for a live event, watch your inbox for updates and tips.</p>
                <p class="list-item">🎬 If you submitted online, get ready for expert feedback from our judges.</p>
                <p class="list-item">💃 Explore <a href="https://lovedancelive.com/workshops">Workshops</a> and <a href="https://lovedancelive.com/online-classes">Online Classes</a> to keep your skills sharp.</p>
              </div>
              <p>Got questions? Visit our FAQ or reply to this email — we're here to help.</p>
              <p class="signature">Keep dancing,<br>The LoveDanceLive Team</p>
            </div>
          </body></html>
        `
      }
    
    case 'video-confirmation':
      return {
        subject: 'Your Dance Video Has Been Received!',
        html: `
          <html><head><style>${baseStyles}</style></head><body>
            <div class="container">
              <h1>Video Received! 🎉</h1>
              <p>Hey ${firstName},</p>
              <p>We got your video! Our judges will review it soon. If you chose the Premium Critique option, detailed feedback will be on its way shortly.</p>
              <div class="section">
                <h2>Meanwhile:</h2>
                <p class="list-item">📚 Explore our <a href="https://lovedancelive.com/workshops">Workshops</a> to level up your moves.</p>
                <p class="list-item">🎥 Check out past performances and get inspired.</p>
                <p class="list-item">👥 Invite friends and family to watch and cheer you on.</p>
              </div>
              <p>Thanks for being part of LoveDanceLive!</p>
              <p class="signature">The LoveDanceLive Team</p>
            </div>
          </body></html>
        `
      }
    
    case 'workshop-reminder':
      return {
        subject: 'Your Upcoming Dance Workshop is Almost Here!',
        html: `
          <html><head><style>${baseStyles}</style></head><body>
            <div class="container">
              <h1>Workshop Reminder 📅</h1>
              <p>Hi ${firstName},</p>
              <p>Your workshop, "<strong>${workshopName}</strong>", is happening on <strong>${workshopDate}</strong>.</p>
              <div class="section">
                <h2>Here's your quick checklist:</h2>
                <p class="list-item">⏰ Arrive 30 minutes early for registration (or log in 10 minutes before if online).</p>
                <p class="list-item">💧 Bring water, comfortable clothing, and a great attitude!</p>
                <p class="list-item">📶 Check your connection if attending online.</p>
              </div>
              <p>We can't wait to see you dance!</p>
              <p class="signature">LoveDanceLive Workshops Team</p>
            </div>
          </body></html>
        `
      }
    
    case 'dubai-invite':
      return {
        subject: 'Congratulations — You\'re Going to Dubai!',
        html: `
          <html><head><style>${baseStyles}</style></head><body>
            <div class="container">
              <h1 style="color: #9b87f5; text-align: center;">🎉 Congratulations! 🎉</h1>
              <p>Hi ${firstName},</p>
              <p class="congrats">You've earned a Golden Ticket to the LoveDanceLive Grand Final in Dubai!</p>
              <p>Your invitation pack and schedule details are attached.</p>
              <div class="section" style="background-color: #f3f0ff; border: 2px solid #9b87f5;">
                <h2>Included:</h2>
                <p class="list-item">🎫 Your finalist registration code</p>
                <p class="list-item">🏨 Resort suite and chaperone booking info</p>
                <p class="list-item">📅 Three-day event itinerary</p>
              </div>
              <p>We can't wait to celebrate your incredible talent.</p>
              <p class="signature" style="font-style: italic;">With love and applause,<br>The LoveDanceLive Finals Team</p>
            </div>
          </body></html>
        `
      }
    
    default:
      throw new Error('Invalid email type')
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { type, to, firstName, workshopName, workshopDate }: EmailRequest = await req.json()

    const { subject, html } = getEmailContent(type, firstName, workshopName, workshopDate)

    // Send email using Brevo API
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: 'LoveDanceLive',
          email: 'hello@lovedancelive.com',
        },
        to: [
          {
            email: to,
            name: firstName,
          },
        ],
        subject,
        htmlContent: html,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Brevo API error:', error)
      throw new Error(`Failed to send email: ${error}`)
    }

    const result = await response.json()
    console.log('Email sent successfully:', result)

    return new Response(JSON.stringify({ success: true, messageId: result.messageId }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    })
  } catch (error: any) {
    console.error('Error in send-email function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    )
  }
})
