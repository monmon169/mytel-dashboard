const { defineConfig } = require("cypress");
const axios = require('axios');
require('dotenv').config();
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

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
  }
});
      addMatchImageSnapshotPlugin(on, config);
    },
  },
});



