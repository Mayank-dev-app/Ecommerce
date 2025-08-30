// otpEmailTemplate.js
function otpEmailTemplate(otp, {
  name = "there",
  appName = "Your App",
  supportEmail = "support@example.com",
  validityMinutes = 10
} = {}) {
  const year = new Date().getFullYear();

  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${appName} - Your OTP</title>
    <style>
      /* Some clients ignore <style>, so important styles are also inline below */
      @media (max-width:600px){
        .container{ width:100% !important; }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background:#f5f7fb; font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f5f7fb; padding:24px 0;">
      <tr>
        <td align="center">
          <table class="container" role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:600px; max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 2px 12px rgba(16,24,40,.08);">
            <!-- Header -->
            <tr>
              <td style="background:#0d6efd; color:#ffffff; padding:16px 24px; font-size:18px; font-weight:700;">
                ${appName}
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 12px; color:#101828; font-size:16px;">
                  Hi ${name},
                </p>
                <p style="margin:0 0 16px; color:#475467; font-size:14px; line-height:1.6;">
                  Use the One-Time Password (OTP) below to continue your sign in / verification.
                  This code will expire in <strong>${validityMinutes} minutes</strong>.
                </p>

                <!-- OTP Box -->
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:16px 0 8px;">
                  <tr>
                    <td align="center" style="padding:16px; border:1px solid #e4e7ec; border-radius:10px; background:#f9fafb;">
                      <div style="letter-spacing:8px; font-size:28px; font-weight:800; color:#101828;">
                        ${String(otp).replace(/\s/g,'')}
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- Button (optional) -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:12px 0 20px;">
                  <tr>
                    <td align="center">
                      <a href="#" style="display:inline-block; text-decoration:none; padding:12px 20px; border-radius:8px; background:#0d6efd; color:#ffffff; font-size:14px; font-weight:700;">
                        Enter OTP
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 8px; color:#475467; font-size:13px; line-height:1.6;">
                  If you didn’t request this, you can safely ignore this email.
                </p>
                <p style="margin:0; color:#475467; font-size:13px; line-height:1.6;">
                  Need help? Contact us at <a href="mailto:${supportEmail}" style="color:#0d6efd; text-decoration:none;">${supportEmail}</a>.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding:16px 24px; background:#f8fafc; color:#98a2b3; font-size:12px;">
                © ${year} ${appName}. All rights reserved.
              </td>
            </tr>
          </table>

          <!-- small spacer -->
          <div style="height:24px; line-height:24px;">&nbsp;</div>

          <!-- Plain-text fallback note (some clients preview this) -->
          <div style="display:none; white-space:pre; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden;">
            Your ${appName} OTP is ${otp}. It expires in ${validityMinutes} minutes.
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}

module.exports = otpEmailTemplate;
