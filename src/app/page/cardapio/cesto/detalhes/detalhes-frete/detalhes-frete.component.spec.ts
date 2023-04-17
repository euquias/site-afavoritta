import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DetalhesFreteComponent} from './detalhes-frete.component';

describe('DetalhesFreteComponent', () => {
  let component: DetalhesFreteComponent;
  let fixture: ComponentFixture<DetalhesFreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesFreteComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetalhesFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
