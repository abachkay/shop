import { TestBed } from '@angular/core/testing';

import { RandomStringsGeneratorService } from './random-strings-generator.service';

describe('RandomStringsGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomStringsGeneratorService = TestBed.get(RandomStringsGeneratorService);
    expect(service).toBeTruthy();
  });
});
