/* eslint-disable no-console */
const logger = require('winston');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

const usersInit = function (){
  logger.info('Cleaning Users...');
  return app.service('users').remove(null, {})
    .then(function(){
      return usersCreate();
    });
};

const usersCreate = function (){
  logger.info('Creating Users...'); 
  return Promise.all([
    app.service('users').create({
      name: 'Administrator',
      email: 'admin@test',
      password: 'admin'
    }),
    app.service('users').create({
      name: 'Standard user', 
      email: 'user@test',
      password: 'user'
    })
  ]).then(function(){
    logger.info('Users created:'); 
    logger.info('Username: admin@test Password: admin');
    logger.info('Username: user@test  Password: user');
    return Promise.resolve();
  });
    
};

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  usersInit().then(
    logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
  ).catch(function(error){
    logger.error(error);
  })
);
