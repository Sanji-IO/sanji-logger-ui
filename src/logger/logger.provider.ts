import { LoggerService } from './logger.service';
import { Inject, NgModule } from 'ng-metadata/core';

export class LoggerProvider {
  private config: any;
  configure: Function;

  constructor( @Inject('$mdThemingProvider') private $mdThemingProvider: ng.material.IThemingProvider) {
    this.config = {
      successTheme: 'success-toast',
      errorTheme: 'error-toast'
    };

    this.configure = cfg => {
      $mdThemingProvider.theme(cfg.successTheme);
      $mdThemingProvider.theme(cfg.errorTheme);
    };

    this.configure(this.config);
  }

  $get(
    @Inject('$log') $log: ng.ILogService,
    @Inject('$mdToast') $mdToast: ng.material.IToastService
  ) {
    return new LoggerService($log, $mdToast);
  }
}