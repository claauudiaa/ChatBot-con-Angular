import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoresPrimarios } from './colores-primarios';

describe('ColoresPrimarios', () => {
  let component: ColoresPrimarios;
  let fixture: ComponentFixture<ColoresPrimarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColoresPrimarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoresPrimarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
