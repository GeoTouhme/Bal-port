import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedRoutingModule } from './shared-routing.module';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from './material.module';

import { HomeComponent } from './home/home.component';

import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { ProductComponent } from './components/product/product.component';
import { ProvidersModule } from './providers.module';

@NgModule({
  declarations: [
    ProductComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    RegisterComponent
  ],
  imports: [
    SharedRoutingModule,
    CommonModule,
    MaterialModule,
    NgxMatIntlTelInputComponent,
    ProvidersModule
  ],
  exports: [
    MaterialModule
  ],
  // Step 3: Add the following block...
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
