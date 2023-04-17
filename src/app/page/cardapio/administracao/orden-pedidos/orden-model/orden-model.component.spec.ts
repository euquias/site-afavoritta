import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OrdenModelComponent} from './orden-model.component';

describe('OrdenModelComponent', () => {
  let component: OrdenModelComponent;
  let fixture: ComponentFixture<OrdenModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdenModelComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OrdenModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
