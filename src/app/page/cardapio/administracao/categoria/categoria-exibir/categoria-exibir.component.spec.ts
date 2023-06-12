import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaExibirComponent } from './categoria-exibir.component';

describe('CategoriaExibirComponent', () => {
  let component: CategoriaExibirComponent;
  let fixture: ComponentFixture<CategoriaExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaExibirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
