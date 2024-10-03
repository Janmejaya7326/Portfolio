const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure the email transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'janmejayakhandual@gmail.com', // your Gmail account
      pass: 'esku wvlu yujt juhi', // your Gmail account password or app password
    },
  });

  // Configure the email options
  let mailOptions = {
    from: email,
    to: 'janmejayakhandual@gmail.com',
    subject: `Message from portfolio send by ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    res.status(500).send('Error sending Message');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
