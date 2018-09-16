import { Component, OnInit, AfterViewInit, ContentChildren, QueryList, Input, ViewChild } from '@angular/core';

import { SlideDirective } from './slide.directive';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {

  @ContentChildren(SlideDirective) slides: QueryList<SlideDirective>;
  @ViewChild('slider') slider;
  @Input() controlRight: boolean = false;
  activePage: number = 0;
  sliderStyles = {};

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (!this.pageLength) {
        this.activePage = -1;
      }
    }, 0);
  }

  get pageLength() {
    return Math.ceil(this.slides.length / 3);
  }

  next() {
    if (this.activePage + 1 < this.pageLength) {
      this.activePage += 1;
      this.changeMargin();
    }
  }

  prev() {
    if (this.activePage - 1 >= 0) {
      this.activePage -= 1;
      this.changeMargin();
    }
  }

  private changeMargin() {
    this.sliderStyles['margin-left'] = `${-this.activePage * 1150}px`;
  }
}
