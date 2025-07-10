const { defineConfig } = require("cypress");
const nodemailer = require('nodemailer');
const axios = require('axios');
require('dotenv').config();

module.exports = defineConfig({
  downloadsFolder: "./downloads",
  fixturesFolder: "./fixtures",
  screenshotsFolder: "./screenshots",
  videosFolder: "./videos",
  e2e: {
    baseUrl: "https://dashboard.mytel.com.mm/auth/login",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      on('task', {
  sendTelegramMessage(message) {
    const botToken = `8051879244:AAFBrI99Dsf6k31JO87PqIcWdFJSdVR4qfE`;
    const chatId = -4888388278;

     if (!botToken || !chatId) {
    throw new Error('Telegram bot token or chat ID is missing!');
  }


    return axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown'
    }).then(() => {
      console.log("Telegram message sent.");
      return true;
    }).catch((error) => {
      console.error("Telegram message failed:", error.message);
      throw new Error(error.message);
    });
  },

  sendZimbraEmail({ subject, body }) {
    let transporter = nodemailer.createTransport({
      host: 'smtp.mytel.com.mm', // replace with real Zimbra SMTP server
      port: 465,
      secure: true,
      auth: {
        user: 'ayemyatmon33@mytel.com.mm',
        pass: 'Met@lliC@13#!'
      }
    });

    return transporter.sendMail({
      from: '"Automation Bot" <ayemyatmon33@mytel.com.mm>',
      to: 'ayemyatmon33@mytel.com.mm,heinhtet5@mytel.com.mm', 
      subject: subject,
      text: body
    }).then(info => {
      console.log('Email sent: ', info.messageId);
      return true;
    }).catch(error => {
      console.error('Email sending failed:', error.message);
      throw new Error(error.message);
    });
  }
});
    },
  },
});



