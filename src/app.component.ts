import { Component, OnInit, Inject } from 'ng-metadata/core';
import { logger } from './logger/logger.module';
import { LoggerService } from './logger/logger.service';

@Component({
  selector: 'my-app',
  template: ``
})
export class AppComponent implements OnInit {
  constructor( @Inject(logger) private log: LoggerService) { }

  ngOnInit() {
    this.log.info('test');
  }
}
