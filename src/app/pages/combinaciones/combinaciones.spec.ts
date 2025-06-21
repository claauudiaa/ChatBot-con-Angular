import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Combinaciones } from './combinaciones';

describe('Combinaciones', () => {
  let component: Combinaciones;
  let fixture: ComponentFixture<Combinaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Combinaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Combinaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
