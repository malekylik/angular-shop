import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { InnerModule } from './inner/inner.module';
import { FeatureModule } from './feature/feature.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SortControlComponent } from './sort-control/sort-control.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductSmallComponent } from './product-small/product-small.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SortControlComponent,
    ProductCategoryComponent,
    ProductSmallComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbDropdownModule,
    AppRoutingModule,
    FeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
