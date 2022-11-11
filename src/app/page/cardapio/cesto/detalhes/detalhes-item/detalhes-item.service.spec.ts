import { TestBed } from '@angular/core/testing';

import { DetalhesItemService } from './detalhes-item.service';

describe('DetalhesItemService', () => {
  let service: DetalhesItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalhesItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
