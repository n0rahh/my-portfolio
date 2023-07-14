const dotenv = require('dotenv');
const sendgrid = require('@sendgrid/mail');

dotenv.config();
sendgrid.setApiKey(process.env.VUE_APP_SENDGRID_API_KEY);

module.exports = sendgrid;
