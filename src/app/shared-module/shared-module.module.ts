import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedRoutingModule } from './shared-routing.module';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from './material.module';
import { register } from 'swiper/element/bundle';
import { HomeComponent } from './home/home.component';
import { SwiperDirective } from '../highlight.directive';
import { CartComponent } from './components/cart/cart.component';

register();
@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    SwiperDirective,
    HomeComponent,
    CartComponent
  ],
  imports: [
    SharedRoutingModule,
    CommonModule,
    MaterialModule,

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
