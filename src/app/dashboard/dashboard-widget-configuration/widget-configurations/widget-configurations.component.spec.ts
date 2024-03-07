import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetConfigurationsComponent } from './widget-configurations.component';

describe('WidgetConfigurationsComponent', () => {
  let component: WidgetConfigurationsComponent;
  let fixture: ComponentFixture<WidgetConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetConfigurationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
