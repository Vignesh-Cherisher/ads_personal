import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetPickerComponent } from './dashboard-widget-picker.component';

describe('DashboardWidgetPickerComponent', () => {
  let component: DashboardWidgetPickerComponent;
  let fixture: ComponentFixture<DashboardWidgetPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardWidgetPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardWidgetPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
