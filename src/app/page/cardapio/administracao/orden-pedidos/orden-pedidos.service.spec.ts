import {TestBed} from '@angular/core/testing';

import {OrdenPedidosService} from './orden-pedidos.service';

describe('OrdenPedidosService', () => {
  let service: OrdenPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
