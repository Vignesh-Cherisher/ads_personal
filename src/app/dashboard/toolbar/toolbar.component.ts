import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  isCollapsed = false
  chartTypes: object[] = [
    { chartName: 'Bar Chart', iconValue: 'https://img.icons8.com/color/48/bar-chart--v1.png', iconAltValue: 'bar-chart'},
    { chartName: 'Line Plot', iconValue: 'https://img.icons8.com/ios/50/32f0dc/line-chart--v1.png', iconAltValue: 'line-chart'},
    { chartName: 'Scatter Plot', iconValue: 'https://img.icons8.com/ios/50/32f0dc/scatter-plot.png', iconAltValue: 'scatter-plot'},
    { chartName: 'Pie Chart', iconValue: 'https://img.icons8.com/ios/50/32f0dc/investment-portfolio--v1.png', iconAltValue: 'pie-chart'},
    { chartName: 'Doughnut', iconValue: 'https://img.icons8.com/ios/50/32f0dc/doughnut-chart--v1.png', iconAltValue: 'doughnut-chart'},
    { chartName: 'Histogram', iconValue: 'https://img.icons8.com/ios/50/32f0dc/maximum-value--v1.png', iconAltValue: 'histogram'},
    { chartName: 'Heat Map', iconValue: 'https://img.icons8.com/ios/50/32f0dc/heat-map.png', iconAltValue: 'heat-map'}
  ]

  collapseToolbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
