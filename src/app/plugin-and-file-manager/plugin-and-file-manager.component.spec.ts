import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginAndFileManagerComponent } from './plugin-and-file-manager.component';

describe('PluginAndFileManagerComponent', () => {
  let component: PluginAndFileManagerComponent;
  let fixture: ComponentFixture<PluginAndFileManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluginAndFileManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PluginAndFileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
