import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenObsComponent } from './orden-obs.component';

describe('OrdenObsComponent', () => {
  let component: OrdenObsComponent;
  let fixture: ComponentFixture<OrdenObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenObsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
