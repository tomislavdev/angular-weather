import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationaryMetricsComponent } from './stationary-metrics.component';

describe('StationaryMetricsComponent', () => {
  let component: StationaryMetricsComponent;
  let fixture: ComponentFixture<StationaryMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationaryMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationaryMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
