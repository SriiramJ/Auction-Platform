import nodemailer from "nodemailer"; // For email sending

export const sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Setting up the email transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: email,
    to: "your-email@gmail.com",
    subject: `Contact Form: ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message." });
  }
};
