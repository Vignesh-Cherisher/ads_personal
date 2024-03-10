import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarAndLineChartWidgetComponent } from './bar-and-line-chart-widget.component';

describe('BarAndLineChartWidgetComponent', () => {
  let component: BarAndLineChartWidgetComponent;
  let fixture: ComponentFixture<BarAndLineChartWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarAndLineChartWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarAndLineChartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
