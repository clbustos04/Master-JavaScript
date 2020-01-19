import { TestBed } from '@angular/core/testing';

import { ZapatillasService } from './zapatillas.service';

describe('ZapatillasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZapatillasService = TestBed.get(ZapatillasService);
    expect(service).toBeTruthy();
  });
});
