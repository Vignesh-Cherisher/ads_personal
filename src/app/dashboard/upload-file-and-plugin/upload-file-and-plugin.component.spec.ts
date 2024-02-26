import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileAndPluginComponent } from './upload-file-and-plugin.component';

describe('UploadFileAndPluginComponent', () => {
  let component: UploadFileAndPluginComponent;
  let fixture: ComponentFixture<UploadFileAndPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadFileAndPluginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadFileAndPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
