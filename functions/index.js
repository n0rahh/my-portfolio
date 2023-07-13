const functions = require('firebase-functions');
const cors = require('cors');

const sendgrid = require('../src/helpers/sendgrid');

const allowedOrigins = [
  'https://my-portfolio-6167f.web.app',
  'http://localhost:8080',
];

const handleCors = cors({
  origin: (origin, callback) => {
    const isAllowed = allowedOrigins.includes(origin);
    callback(null, isAllowed);
  },
});

exports.sendEmail = functions.https.onRequest(
    (request, response) => {
      handleCors(request, response, async () => {
        const {
          name,
          email,
          message,
          attachment,
          attachmentType,
          attachmentSize,
        } = request.body;

        if (attachment &&
      (attachmentType !== 'application/pdf' || attachmentSize > 5242880)
        ) {
          return response.status(400).send('ERROR');
        }

        try {
          await sendgrid.send({
            to: process.env.TO_EMAIL,
            from: {
              name: 'Portfolio',
              email: process.env.FROM_EMAIL,
            },
            templateId: 'd-04d9866f613a4ab6b1edbfd21377ae25',
            dynamic_template_data: {
              user_name: name,
              user_email: email,
              message,
            },
            ...(attachment && {
              attachments: [
                {
                  content: attachment,
                  filename: 'Attachment.pdf',
                  type: 'application/pdf',
                  disposition: 'attachment',
                  content_id: 'attachment',
                },
              ],
            }),
            hideWarnings: true,
          });
        } catch (error) {
          return response.status(500).send('ERROR');
        }

        return response.status(200).send('OK');
      });
    });
