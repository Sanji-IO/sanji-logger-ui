import { NgModule, OpaqueToken } from 'ng-metadata/core';
import * as ngMaterial from 'angular-material';
import { LoggerProvider } from './logger.provider';

export const logger = new OpaqueToken('logger');

@NgModule({
  imports: [ngMaterial],
  providers: [
    { provide: logger, useClass: LoggerProvider }
  ]
})
export class LoggerModule { }