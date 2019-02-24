import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgImageBrowserComponent } from './ng-image-browser.component';

describe('NgImageBrowserComponent', () => {
  let component: NgImageBrowserComponent;
  let fixture: ComponentFixture<NgImageBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgImageBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgImageBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
