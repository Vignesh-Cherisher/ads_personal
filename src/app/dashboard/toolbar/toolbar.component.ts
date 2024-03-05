import { Component } from '@angular/core';
import { ChartService } from '../../Services/Chart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(private chartService: ChartService) { }
  isCollapsed = false
  chartTypes: object[] = [
    { chartTypeValue:'bar', chartName: 'Bar Chart', iconValue: 'https://img.icons8.com/color/48/bar-chart--v1.png', iconAltValue: 'bar-chart'},
    { chartTypeValue:'line', chartName: 'Line Plot', iconValue: 'https://img.icons8.com/ios/50/32f0dc/line-chart--v1.png', iconAltValue: 'line-chart'},
    { chartTypeValue:'markers', chartName: 'Scatter Plot', iconValue: 'https://img.icons8.com/ios/50/32f0dc/scatter-plot.png', iconAltValue: 'scatter-plot'},
    { chartTypeValue:'pie', chartName: 'Pie Chart', iconValue: 'https://img.icons8.com/ios/50/32f0dc/investment-portfolio--v1.png', iconAltValue: 'pie-chart'},
    { chartTypeValue:'bar', chartName: 'Doughnut', iconValue: 'https://img.icons8.com/ios/50/32f0dc/doughnut-chart--v1.png', iconAltValue: 'doughnut-chart'},
    { chartTypeValue:'bar', chartName: 'Histogram', iconValue: 'https://img.icons8.com/ios/50/32f0dc/maximum-value--v1.png', iconAltValue: 'histogram'},
    { chartTypeValue:'bar', chartName: 'Heat Map', iconValue: 'https://img.icons8.com/ios/50/32f0dc/heat-map.png', iconAltValue: 'heat-map'}
  ]

  collapseToolbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  createChart(chartType: string) {
    this.chartService.createChart(chartType)
  }
}
