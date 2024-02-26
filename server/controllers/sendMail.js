const { Resend } = require("resend");
const resend = new Resend("re_PZieyY8W_2JvyEKZP1Hp7y7FLGZ6Dt8zH");
const img = "https://drive.google.com/uc?id=1bRU9vOOSIK9IlX_XDpEnlQPRn-GOTq8b";

const sendEmail = async (req, res) => {
  // console.log(req.body);
  const { name, email, phone } = req.body;

  const { data, error } = await resend.emails.send({
    from: "CYBERVIE.COM <onboarding@resend.dev>",
    to: email,
    subject: "Registration Successful - CYBERVIE.COM",
    html: `
    <!doctype html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Message - CYBERVIE.COM</title>
    <style>
        body {
            background-color: #f7f7f7;
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 30px auto;
            padding: 40px; 
            background-color: #ffffff;
            border: 1px solid #ddd;
            text-align: left;
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
            border-radius: 5px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px 0;
            background-color: #26c6da;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }
        .footer {
            font-size: 12px;
            color: #777777;
            margin-top: 20px;
        }
        .header {
            font-weight: bold; 
        }
    </style>
    </head>
    <body>
    <div class="container">
        <img src=${img} alt="Logo" style="height: 100px; margin: 0 auto 20px; display: block;">
        <h2 class="header">Registration Successful</h2>
        <p>Hello, ${name}</p>
        <p>You are successfully registered on CYBERVIE.COM</p>
        <p>Here are your details:</p>
        <p>Your email Id: ${email}</p>
        <p>Your phone number: ${phone}</p>
        <br/>
        <p>Thank you for registering on <strong>CYBERVIE.COM</strong></p>
        <br>
        <p class="footer">Regards,</p>
        <p class="footer">VENKATESH M</p>
    </div>
    </body>
    </html>`,
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
};

module.exports = sendEmail;