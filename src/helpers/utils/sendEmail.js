const nodemailer = require('nodemailer');

module.exports = (email, code) => {
  const port = parseInt(process.env.PORT, 10) || '7500';
  const host = process.env.NODE_ENV || '127.0.0.1';

  const mail = nodemailer.createTransport({ // TODO: add creds
    service: 'gmail',
    auth: {
      user: '',
      pass: '',
    },
  });

  const mailOptions = { // TODO: change creds
    from: 'tutsmake@gmail.com',
    to: email,
    subject: 'Email verification - Tutsmake.com',
    html: `<p>You requested for email verification, kindly use this <a href="http://${host}:${port}:${code}">link</a> to verify your email address</p>`,

  };

  mail.sendMail(mailOptions, (error) => {
    if (error) {
      throw Error('Mail didn\'t send');
    }
    return 0;
  });
};
