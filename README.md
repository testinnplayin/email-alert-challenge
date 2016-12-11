Starter files for emaill alert middleware challenge
===================================================

https://github.com/Thinkful-Ed/node-email-alert-middleware-challenge-starter


Note that `emailer.sendEmail` expects two environment variables to be set:
`MAILJET_KEY` and `MAILJET_SECRET`. You'll have to sign up for a (free) Mailjet
account in order to get credentials.

DO NOT hard code these into your source code. They should be set as environment
variables on your server, and your application code should access them via
`process.env.myVar`.
