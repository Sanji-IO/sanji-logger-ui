import 'toastr.scss';
import './app.scss';

import angular from 'angular';
import sjLogger from './component';

const app = angular.module('webapp', [sjLogger]);
app.run(logger => {
  logger.info('This is info message');
  logger.error('This is error message');
  logger.warn('This is warning message');
  logger.success('This is success message');
});

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
