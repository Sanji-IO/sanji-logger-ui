import './app.scss';
import 'angular';
import loggerModule from './component';

let app = angular.module('webapp', [loggerModule]);
app.run((logger) => {
  logger.info('This is info message');
  logger.error('This is error message');
  logger.warning('This is warning message');
  logger.success('This is success message');
});
