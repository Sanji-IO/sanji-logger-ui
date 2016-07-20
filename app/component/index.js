import angular from 'angular';
import toastr from 'toastr';

import LoggerService from './logger.service';

const sjLogger = angular.module('sanji.logger', [])
  .constant('toastr', toastr)
  .service('logger', LoggerService)
  .name;
export {sjLogger};
