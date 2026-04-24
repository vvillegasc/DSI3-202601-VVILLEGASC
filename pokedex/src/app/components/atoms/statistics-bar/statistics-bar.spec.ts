import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsBar } from './statistics-bar';

describe('StatisticsBar', () => {
  let component: StatisticsBar;
  let fixture: ComponentFixture<StatisticsBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsBar],
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticsBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
