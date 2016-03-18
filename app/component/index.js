import angular from 'angular';
import toastr from 'toastr';

import LoggerService from './logger.service';

let app = angular.module('sanji.logger', []);
app.constant('toastr', toastr);
app.service('logger', LoggerService);
export default app = app.name
