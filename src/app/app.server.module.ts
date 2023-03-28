import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServerStateInterceptor } from 'serverstate.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ServerStateInterceptor,
    multi: true
  },
],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
