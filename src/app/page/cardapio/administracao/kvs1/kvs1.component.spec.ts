import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kvs1Component } from './kvs1.component';

describe('Kvs1Component', () => {
  let component: Kvs1Component;
  let fixture: ComponentFixture<Kvs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kvs1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kvs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
