import { LoggerService } from './logger.service';
import { Inject, NgModule } from 'ng-metadata/core';

export class LoggerProvider {
  constructor( @Inject('$mdThemingProvider') private $mdThemingProvider: ng.material.IThemingProvider) {
    $mdThemingProvider.theme('success-toast');
    $mdThemingProvider.theme('error-toast');
  }

  $get(
    @Inject('$log') $log: ng.ILogService,
    @Inject('$mdToast') $mdToast: ng.material.IToastService
  ) {
    return new LoggerService($log, $mdToast);
  }
}