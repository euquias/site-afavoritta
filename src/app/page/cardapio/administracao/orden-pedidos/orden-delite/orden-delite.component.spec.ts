import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenDeliteComponent } from './orden-delite.component';

describe('OrdenDeliteComponent', () => {
  let component: OrdenDeliteComponent;
  let fixture: ComponentFixture<OrdenDeliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenDeliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenDeliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
