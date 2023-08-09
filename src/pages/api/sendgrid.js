
import { error } from 'console';
import 'dotenv/config';
import * as sgMail from '@sendgrid/mail';
import { text } from 'stream/consumers';

sgMail.setApiKey(process.env.VTECH_SENDGRID_API_KEY);

export default (req,res) => {
  const body = JSON.stringify(req.body);

  const message = `
    First Name:${body.firstname}\r\n
    Last Name:${body.lastname}\r\n
    Email:${body.email}\r\n
    Phone Number:${body.phonenumber}\r\n
    Message:${body.message}
  `;

  const messageData = {
    to:'vembarasugn@gmail.com',
    from:'hello@vtechrenewables.com',
    subject:'Message from New User!',
    text: message,
   // html: message.replace(/\r\n/g,'<br>'),
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${body.firstname}, their email is: ✉️${body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${body.message}</p>
              <br>
              </div>
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>vtechrenewables.com<br>info@vtechrenewables.com<br>+91 9098797979</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://instagram.com/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://linkedin.com/in/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                <a href="https://twitter.com/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
              </div>
              </div>
      </body>
      </html>`,
  };

  sgMail.send(messageData).then(() =>{
    console.log('Mail has been Sent')
  }).catch((error) => {
    console.error(error);
  });

  console.log(body);
  res.status(200).json({status:'ok'});
}



