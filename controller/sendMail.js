import nodemailer from "nodemailer";
import { templateEmail } from "./templates/index";
const sgMail = require("@sendgrid/mail");


export default async function main(name, email, token){
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || token);
    console.log(process.env.SENDGRID_API_KEY)
    
    const msg = {
      to: email, 
      from: "support@mrvideoonline.com", 
      subject: "Test Email",
      html: templateEmail(name),
  };
  
  try {
    let data = await sgMail.send(msg);
    return data;
} catch (error) {
    return error;
}
}

// const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: Number(process.env.MAIL_PORT),
//   secure: true,
//   auth: {
//     user: process.env.MAIL_AUTH_USER,
//     pass: process.env.MAIL_AUTH_PASSWORD,
//   }
// });

// export default async function main(name, customerEmail) {
//   try {
//     console.log(name, customerEmail);
//     const info = await transporter.sendMail({
//       from: '"Mr. Video 👻" <_mainaccount@mvpbcapp.a2hosted.com>', 
//       to: customerEmail,
//       subject: "Hello ✔",
//       html: templateEmail(name)
//     });
//     return info.messageId;  // Return the message ID on success
//   } catch (error) {
//     console.error('Error sending email:', error); // Log the full error object for debugging
//     return error.message || 'An unknown error occurred';  // Return only the error message
//   }
// }
