import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteExibirComponent } from './frete-exibir.component';

describe('FreteExibirComponent', () => {
  let component: FreteExibirComponent;
  let fixture: ComponentFixture<FreteExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreteExibirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreteExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
