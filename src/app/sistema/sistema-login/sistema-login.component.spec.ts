import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaLoginComponent } from './sistema-login.component';

describe('SistemaLoginComponent', () => {
  let component: SistemaLoginComponent;
  let fixture: ComponentFixture<SistemaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
