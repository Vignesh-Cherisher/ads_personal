import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPluginsComponent } from './upload-plugins.component';

describe('UploadPluginsComponent', () => {
  let component: UploadPluginsComponent;
  let fixture: ComponentFixture<UploadPluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadPluginsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
