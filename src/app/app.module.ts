import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-module/shared-module.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedRoutingModule } from './shared-module/shared-routing.module';
import { RouterModule } from '@angular/router';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMatIntlTelInputComponent,
    SharedRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
