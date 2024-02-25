import nodemailer from "nodemailer";

const EmailController = async (req, res) => {
  const { email } = req.body;
  console.log("email:", email);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Sending mail using React and Node",
      html: "Congratulation you received mail",
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Email sent:", info.response);
        res.status(201).json({ success: true, info });
      }
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

export { EmailController };
