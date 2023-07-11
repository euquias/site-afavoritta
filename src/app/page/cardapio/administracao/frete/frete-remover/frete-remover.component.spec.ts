import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteRemoverComponent } from './frete-remover.component';

describe('FreteRemoverComponent', () => {
  let component: FreteRemoverComponent;
  let fixture: ComponentFixture<FreteRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreteRemoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreteRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
