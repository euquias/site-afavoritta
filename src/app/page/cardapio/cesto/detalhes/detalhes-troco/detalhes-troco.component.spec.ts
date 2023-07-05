import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesTrocoComponent } from './detalhes-troco.component';

describe('DetalhesTrocoComponent', () => {
  let component: DetalhesTrocoComponent;
  let fixture: ComponentFixture<DetalhesTrocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesTrocoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesTrocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
