import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRemoverComponent } from './menu-remover.component';

describe('MenuRemoverComponent', () => {
  let component: MenuRemoverComponent;
  let fixture: ComponentFixture<MenuRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRemoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
