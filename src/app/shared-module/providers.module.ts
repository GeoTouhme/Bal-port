import { APP_BASE_HREF, DatePipe } from '@angular/common';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { JwtInterceptor } from './interceptors/jwt-interceptor.service';


@NgModule({
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})

export class ProvidersModule { }
