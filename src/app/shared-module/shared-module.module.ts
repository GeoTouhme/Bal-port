import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedRoutingModule } from './shared-routing.module';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent
  ],
  imports: [
    SharedRoutingModule,
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
