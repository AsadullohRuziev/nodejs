//npm install nodemailer



var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'asadullohruziev@gmail.com',
    pass: 'A453816729r#'
  }
});

var mailOptions = {
  from: 'asadullohruziev@gmail.com',
  to: 'asadbeeeek@mail.ru',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});