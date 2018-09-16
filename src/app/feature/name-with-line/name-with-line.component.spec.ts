import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameWithLineComponent } from './name-with-line.component';

describe('NameWithLineComponent', () => {
  let component: NameWithLineComponent;
  let fixture: ComponentFixture<NameWithLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameWithLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameWithLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
