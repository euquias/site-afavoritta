import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OrdenPedidosComponent} from './orden-pedidos.component';

describe('OrdenPedidosComponent', () => {
  let component: OrdenPedidosComponent;
  let fixture: ComponentFixture<OrdenPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdenPedidosComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OrdenPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
