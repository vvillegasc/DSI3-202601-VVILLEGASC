import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNumber } from './pokemon-number';

describe('PokemonNumber', () => {
  let component: PokemonNumber;
  let fixture: ComponentFixture<PokemonNumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonNumber],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonNumber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
