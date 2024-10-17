const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const sendMail = async (email, message, name) => {
  await transporter.sendMail({
    to: "Bestcreativeyouth@gmail.com",
    replyTo: email,
    subject: "New Query Received",
    text: `Query received from ${email}`,
    html: `
              <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
                  <div style="background-color: #4CAF50; padding: 20px; color: white; text-align: center;">
                    <h1 style="margin: 0; font-size: 24px;">New Query Received</h1>
                  </div>
                  <div style="padding: 20px;">
                    <p style="font-size: 16px; color: #333;">
                    <strong>Message from:</strong> <a  style="color: #4CAF50; text-decoration: none;">${name}</a>
                      <strong>Message from:</strong> <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a>
                    </p>
                    <p style="font-size: 16px; color: #333;">
                      <strong>Message:</strong>
                    </p>
                    <div style="padding: 10px 20px; background-color: #f1f1f1; border-left: 5px solid #4CAF50; margin-top: 10px; font-size: 16px; color: #333;">
                      ${message}
                    </div>
                  </div>
                  <div style="padding: 20px; text-align: center; background-color: #f9f9f9; border-top: 1px solid #e0e0e0;">
                    <p style="margin: 0; font-size: 14px; color: #888;">Thank you for your query. We will get back to you shortly.</p>
                  </div>
                </div>
              </div>
            `,
  });
};

module.exports = sendMail;
