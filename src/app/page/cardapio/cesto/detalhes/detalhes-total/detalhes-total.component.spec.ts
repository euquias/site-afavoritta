import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesTotalComponent } from './detalhes-total.component';

describe('DetalhesTotalComponent', () => {
  let component: DetalhesTotalComponent;
  let fixture: ComponentFixture<DetalhesTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
