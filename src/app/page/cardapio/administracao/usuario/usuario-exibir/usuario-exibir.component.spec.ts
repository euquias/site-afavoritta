import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioExibirComponent } from './usuario-exibir.component';

describe('UsuarioExibirComponent', () => {
  let component: UsuarioExibirComponent;
  let fixture: ComponentFixture<UsuarioExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioExibirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
