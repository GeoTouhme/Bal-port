import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-module/shared-module.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedRoutingModule } from './shared-module/shared-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    SharedRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
