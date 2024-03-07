import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetConfigurationComponent } from './dashboard-widget-configuration.component';

describe('DashboardWidgetConfigurationComponent', () => {
  let component: DashboardWidgetConfigurationComponent;
  let fixture: ComponentFixture<DashboardWidgetConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardWidgetConfigurationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardWidgetConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
