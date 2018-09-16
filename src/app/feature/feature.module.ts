import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NameWithLineComponent } from './name-with-line/name-with-line.component';
import { SliderComponent } from './slider/slider.component';
import { SlideDirective } from './slider/slide.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NameWithLineComponent,
    SliderComponent,
    SlideDirective,
  ],
  exports: [
    NameWithLineComponent,
    SliderComponent,
    SlideDirective
  ]
})
export class FeatureModule { }
