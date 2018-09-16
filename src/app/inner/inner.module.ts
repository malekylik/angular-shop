import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerRoutingModule } from './inner-routing.module';
import { FeatureModule } from '../feature/feature.module';

import { BackNavbarComponent } from './back-navbar/back-navbar.component';
import { ProductComponent } from './product/product.component';
import { ArrayAsStringPipe } from './array-as-string.pipe';

@NgModule({
  imports: [
    CommonModule,
    InnerRoutingModule,
    FeatureModule
  ],
  declarations: [
    ProductComponent,
    BackNavbarComponent,
    ArrayAsStringPipe,
  ],
  exports: [
    ProductComponent
  ]
})
export class InnerModule { }
