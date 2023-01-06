import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuExibirComponent } from './menu-exibir.component';

describe('MenuExibirComponent', () => {
  let component: MenuExibirComponent;
  let fixture: ComponentFixture<MenuExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuExibirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
