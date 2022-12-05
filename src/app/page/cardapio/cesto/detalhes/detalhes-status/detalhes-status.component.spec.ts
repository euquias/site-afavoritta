import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesStatusComponent } from './detalhes-status.component';

describe('DetalhesStatusComponent', () => {
  let component: DetalhesStatusComponent;
  let fixture: ComponentFixture<DetalhesStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
