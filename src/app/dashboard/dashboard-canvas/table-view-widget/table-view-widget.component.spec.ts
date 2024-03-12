import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewWidgetComponent } from './table-view-widget.component';

describe('TableViewWidgetComponent', () => {
  let component: TableViewWidgetComponent;
  let fixture: ComponentFixture<TableViewWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableViewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
