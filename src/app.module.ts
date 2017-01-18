import { NgModule } from 'ng-metadata/core';
import { LoggerModule } from './logger/logger.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [LoggerModule],
  declarations: [AppComponent]
})
export class AppModule { }