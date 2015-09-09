import 'toastr.css';
import toastr from 'toastr';

import LoggerService from './logger.service';

let app = angular.module('sanji.logger', []);
app.constant('toastr', toastr);
app.service('logger', LoggerService);