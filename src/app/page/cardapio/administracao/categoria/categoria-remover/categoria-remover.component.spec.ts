import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaRemoverComponent } from './categoria-remover.component';

describe('CategoriaRemoverComponent', () => {
  let component: CategoriaRemoverComponent;
  let fixture: ComponentFixture<CategoriaRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaRemoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
