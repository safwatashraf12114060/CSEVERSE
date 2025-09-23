// mern_project/server/utils/sendEmail.js
import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, html }) => {
  // Ensure .env has EMAIL_USER, EMAIL_PASS
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    console.log("EMAIL_USER or EMAIL_PASS not configured in .env — falling back to console log.");
    console.log("Email to:", to);
    console.log("Subject:", subject);
    console.log("HTML:", html);
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass
    }
    // If you want other SMTP, configure here.
  });

  const mailOptions = {
    from: user,
    to,
    subject,
    html
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
