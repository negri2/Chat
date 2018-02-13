import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { Http } from '@angular/http/src/http';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, Http]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});