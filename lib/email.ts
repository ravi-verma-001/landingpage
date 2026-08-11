import fs from 'fs'
import path from 'path'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY || ''
const resend = resendApiKey ? new Resend(resendApiKey) : null

const emailLogsDir = path.join(process.cwd(), 'data')
const emailLogFile = path.join(emailLogsDir, 'sent-emails-log.txt')

function ensureLogDirExists() {
  try {
    if (!fs.existsSync(emailLogsDir)) {
      fs.mkdirSync(emailLogsDir, { recursive: true })
    }
  } catch (error) {
    // Fail silently on serverless read-only filesystem
  }
}

// Log a mock email to a file for testing and visibility
function logEmailLocally(to: string, subject: string, body: string) {
  console.log(`[EMAIL PREVIEW] To: ${to} | Subject: ${subject}\n${body}`)
  ensureLogDirExists()
  const logMessage = `
=========================================
TIMESTAMP: ${new Date().toISOString()}
TO: ${to}
SUBJECT: ${subject}
-----------------------------------------
${body}
=========================================
`
  try {
    fs.appendFileSync(emailLogFile, logMessage, 'utf-8')
    console.log(`[EMAIL LOGGED LOCALLY] To: ${to} | Subject: ${subject}`)
  } catch (error) {
    console.warn('[EMAIL FS LOGGING SKIPPED] File system is read-only (Serverless environment).')
  }
}


export async function sendEmail({
  to,
  subject,
  body,
}: {
  to: string
  subject: string
  body: string
}) {
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'ArvianMarketing <bookings@arvianmarketing.shop>'
  
  if (resend) {
    try {
      await resend.emails.send({
        from: fromEmail,
        to,
        subject,
        text: body,
      })
      console.log(`[RESEND EMAIL SENT] To: ${to} | Subject: ${subject} | From: ${fromEmail}`)
    } catch (error) {
      console.error('[RESEND EMAIL FAILED, FALLING BACK TO LOCAL LOG]', error)
      logEmailLocally(to, subject, body)
    }
  } else {
    // No Resend API key configured - write email details locally for developer preview
    logEmailLocally(to, subject, body)
  }
}

export function getEmail1Content(name: string, calendarLink: string) {
  return `Hi ${name},

I just received your details. To make sure we hit the ground running, grab a time on my calendar here so we can map out a custom strategy for your brand:

${calendarLink}

Talk soon,
Founder, ArvianMarketing
`
}

export function getEmail2Content(name: string, calendarLink: string) {
  return `Hi ${name},

I wanted to share a quick insight on why most ad traffic bounces (and how to fix it).

Most agencies run Meta ads that point directly to slow, generic pages. When traffic lands on a mobile phone, even a 2-second delay in page loading can cause up to 40% of users to bounce before they read a single line. This kills your ROAS (Return on Ad Spend).

At ArvianMarketing, we build lightning-fast web pages specifically designed to match our ads campaigns. For a recent client, reducing load times from 4.8 seconds down to 1.2 seconds lowered their cost-per-lead by 34% within the first week.

If you want to review your speed and ad targeting, lock in a quick audit slot here:
${calendarLink}

Talk soon,
Founder, ArvianMarketing
`
}

export function getEmail3Content(name: string, calendarLink: string) {
  return `Hi ${name},

I haven't seen a booking come through, so I'm assuming you're holding off on a new marketing push right now. 

I'll close out your file, but if things change, here is my calendar link:
${calendarLink}

Best of luck,
Founder, ArvianMarketing
`
}

export function getBookingConfirmationContent(name: string, date: string, time: string) {
  return `Hi ${name},

Your Strategy Session has been successfully booked!

Details of your meeting:
Date: ${date}
Time: ${time}
Format: 30-minute Video Call (meeting link will be sent shortly)

We will review your landing page speed, social media presence, and Meta Ads plan to map out a custom growth strategy.

If you need to reschedule, please let us know.

Talk soon,
Founder, ArvianMarketing
`
}


