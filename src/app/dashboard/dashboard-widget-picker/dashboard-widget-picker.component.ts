import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-widget-picker',
  templateUrl: './dashboard-widget-picker.component.html',
  styleUrl: './dashboard-widget-picker.component.css'
})
export class DashboardWidgetPickerComponent {
  isCollapsed = false
  chartTypes: object[] = [
    { chartName: 'Bar Chart', iconValue: 'https://img.icons8.com/color/48/bar-chart--v1.png', iconAltValue: 'bar-chart'},
    { chartName: 'Line Plot', iconValue: 'https://img.icons8.com/ios/50/32f0dc/line-chart--v1.png', iconAltValue: 'line-chart'},
    { chartName: 'Scatter Plot', iconValue: 'https://img.icons8.com/ios/50/32f0dc/scatter-plot.png', iconAltValue: 'scatter-plot'},
    { chartName: 'Table View', iconValue: 'https://img.icons8.com/windows/50/32f0dc/table-1.png', iconAltValue: 'table-view'},
  ]

  collapseWidgetPicker() {
    this.isCollapsed = !this.isCollapsed;
  }
}
