import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileStatisticsComponent } from './file-statistics.component';

describe('FileStatisticsComponent', () => {
  let component: FileStatisticsComponent;
  let fixture: ComponentFixture<FileStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
