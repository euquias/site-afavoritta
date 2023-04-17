import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenStatusComponent } from './orden-status.component';

describe('OrdenStatusComponent', () => {
  let component: OrdenStatusComponent;
  let fixture: ComponentFixture<OrdenStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
