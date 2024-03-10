import { Component } from '@angular/core';
import { WidgetDataService } from '../../Services/widget-data.service';
import { widgetData } from '../../Models/widgetData.model';

@Component({
  selector: 'app-dashboard-widget-picker',
  templateUrl: './dashboard-widget-picker.component.html',
  styleUrl: './dashboard-widget-picker.component.css'
})
export class DashboardWidgetPickerComponent {
  constructor(private widgetDataService: WidgetDataService) {
  }

  isCollapsed = false
  widgetTypes: object[] = [
    { widgetType:'bar', widgetName: 'Bar Chart', iconValue: 'https://img.icons8.com/color/48/bar-chart--v1.png', iconAltValue: 'bar-chart'},
    { widgetType:'scatter', widgetName: 'Line Plot', iconValue: 'https://img.icons8.com/ios/50/32f0dc/line-chart--v1.png', iconAltValue: 'line-chart'},
    { widgetType:'scatter', widgetName: 'Scatter Plot', iconValue: 'https://img.icons8.com/ios/50/32f0dc/scatter-plot.png', iconAltValue: 'scatter-plot'},
    { widgetType:'table', widgetName: 'Table View', iconValue: 'https://img.icons8.com/windows/50/32f0dc/table-1.png', iconAltValue: 'table-view'},
  ]

  collapseWidgetPicker() {
    this.isCollapsed = !this.isCollapsed;
  }

  triggerWidgetCreation(widgetType: string) {
    let widgetChartType = new widgetData(widgetType)
    this.widgetDataService.addToWidgetDataStore(widgetChartType)
  }
}
