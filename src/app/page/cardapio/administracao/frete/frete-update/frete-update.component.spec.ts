import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteUpdateComponent } from './frete-update.component';

describe('FreteUpdateComponent', () => {
  let component: FreteUpdateComponent;
  let fixture: ComponentFixture<FreteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreteUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
