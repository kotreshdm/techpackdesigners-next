var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail({ subject, fromMail, content }: any) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    to: process.env.NODEMAILER_EMAIL,
    from: fromMail,
    subject: subject,
    html: content,
  };

  transporter.sendMail(mailOptions, function (error: any) {
    if (error) {
      throw new Error(error);
    } else {
      return true;
    }
  });
}
