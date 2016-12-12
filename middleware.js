'use strict';
const {emailer} = require('./emailer');
const {logger} = require('./utilities/logger');
const {ALERT_FROM_EMAIL, ALERT_FROM_NAME, ALERT_TO_EMAIL} = process.env;

if (!(ALERT_FROM_EMAIL && ALERT_FROM_NAME && ALERT_TO_EMAIL)) {
  logger.error('Missing required from config var in `.env`');
}

const useEmailAlerts = (errors) => function(err, req, res, next){
  if ((errors).find(function (error) {
    err instanceof error;
  }) !== undefined) {
    logger.info(`Sending error email to ${ALERT_TO_EMAIL}`);
      const data = {
      'FromEmail': ALERT_FROM_EMAIL,
      'FromName' : ALERT_FROM_NAME,
      'Subject' : `ALERT: a ${err.name} occurred.`,
      'Text-part' : `Something went wrong. Error: ${err.message} at ${err.stack}`,
      'Recipients' : [{'Email' : ALERT_TO_EMAIL}]
    };
    emailer(data);
  }
  
  next(err);
 
};

module.exports = {useEmailAlerts};