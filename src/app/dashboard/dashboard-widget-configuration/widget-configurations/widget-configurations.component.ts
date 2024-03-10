import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { widgetData } from '../../../Models/widgetData.model';
import { WidgetDataService } from '../../../Services/widget-data.service';

@Component({
  selector: 'app-widget-configurations',
  templateUrl: './widget-configurations.component.html',
  styleUrl: './widget-configurations.component.css'
})
export class WidgetConfigurationsComponent implements OnInit {
  widgetFields: object[];
  private lastActiveWidgetSubscription: Subscription = new Subscription();
  lastActiveWidget: Observable<widgetData>

  barChartConfigFields: object[] = [
    { fieldLabel: 'X-Axis', fieldType: 'select' },
    { fieldLabel: 'Y-Axis', fieldType: 'select' },
    { fieldLabel: 'Title', fieldType: 'text' },
    { fieldLabel: 'Orientation', fieldType: 'select', options: ['x', 'y'] },
  ]
  lineScatterConfigFields: object[] = [
    { fieldLabel: 'X-Axis', fieldType: 'select' },
    { fieldLabel: 'Y-Axis', fieldType: 'select' },
    { fieldLabel: 'Title', fieldType: 'text' },
    { fieldLabel: 'Mode', fieldType: 'select', options: ['lines', 'markers', 'lines+markers'] },
  ]

  constructor(public widgetDataService: WidgetDataService) { }

  ngOnInit(): void {
    this.lastActiveWidgetSubscription.add(this.widgetDataService.activeWidgetChanged$.subscribe(widget => {
      if (widget.widgetConfigurationOptions.length === 0) {
        this.getWidgetConfigurations(widget)
      } else {
        this.widgetFields = widget.widgetConfigurationOptions
      }
    }))
  }

  getWidgetConfigurations(widget: widgetData) {
    switch (widget.widgetType) {
      case 'bar':
        this.widgetFields = this.barChartConfigFields
        break
      case 'scatter':
        this.widgetFields = this.lineScatterConfigFields
        break
      default:
        this.widgetFields = this.barChartConfigFields
    }
  }
}
