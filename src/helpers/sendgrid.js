const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.VUE_APP_SENDGRID_API_KEY);

module.exports = sendgrid;
