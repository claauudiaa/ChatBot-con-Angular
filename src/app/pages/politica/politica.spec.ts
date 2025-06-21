import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Politica } from './politica';

describe('Politica', () => {
  let component: Politica;
  let fixture: ComponentFixture<Politica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Politica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Politica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
