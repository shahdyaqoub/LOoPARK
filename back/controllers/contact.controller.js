import nodemailer from "nodemailer";

const sendEmail = async (dest, subject, text) => {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "tharaasukaina@gmail.com", //الايميل اللي بدي ابعث منو رسائل
      pass: "fzca ncml psje hkpm", // كلمة مرور التطبيق من حساب جوجل
    }, // هاي كلمة السر عشان ادب رسل ايميلات من هاد الايميل المكتوب
  });

  let info = await transporter.sendMail({
    from: "tharaasukaina@gmail.com",
    to: dest,
    subject: subject,
    text: text,
  });
  console.log("Email sent: %s", info.messageId);
};
export const contact = async (req, res) => {
   const { Name, Email, Message  } = req.body;
  if (!Name || !Email || !Message ) {
    return res.status(400).json({ message: "NAME and GMAIL and MASSAGE are required." });
  }
  console.log(Name ,Email,Message );
  try {
    await sendEmail(
      "tharaaraed1@gmail.com",
      "New Massege Received",
      `NAME: ${Name}\nMassage: ${Message}\nFrom: ${Email}`
    );
    return res
      .status(200)
      .json({ message: "Massege submitted successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
}; 