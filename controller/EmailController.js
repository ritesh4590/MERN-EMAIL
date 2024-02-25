import nodemailer from "nodemailer";

const EmailController = async (req, res) => {
  const { email } = req.body;
  console.log("email:", email);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "197vikrams@gmail.com",
        pass: "kuuv vudk badu yxem",
      },
    });

    const mailOptions = {
      from: "197vikrams@gmail.com",
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
