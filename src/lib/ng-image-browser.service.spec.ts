import { TestBed } from '@angular/core/testing';

import { NgImageBrowserService } from './ng-image-browser.service';

describe('NgImageBrowserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgImageBrowserService = TestBed.get(NgImageBrowserService);
    expect(service).toBeTruthy();
  });
});
