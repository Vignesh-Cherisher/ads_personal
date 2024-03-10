import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginConfigurationsComponent } from './plugin-configurations.component';

describe('PluginConfigurationsComponent', () => {
  let component: PluginConfigurationsComponent;
  let fixture: ComponentFixture<PluginConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluginConfigurationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PluginConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
