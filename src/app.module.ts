import { NgModule } from 'ng-metadata/core';
import { LoggerModule } from './logger/logger.module';

import { appConfig } from './app.config';
import { AppComponent } from './app.component';

@NgModule({
  imports: [LoggerModule],
  declarations: [AppComponent],
  providers: [appConfig]
})
export class AppModule { }