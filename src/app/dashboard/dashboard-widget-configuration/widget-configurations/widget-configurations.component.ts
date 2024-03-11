import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { widgetData } from '../../../Models/widgetData.model';
import { WidgetDataService } from '../../../Services/widget-data.service';

@Component({
  selector: 'app-widget-configurations',
  templateUrl: './widget-configurations.component.html',
  styleUrl: './widget-configurations.component.css'
})
export class WidgetConfigurationsComponent implements OnInit {
  widgetFields: any[];
  private lastActiveWidgetSubscription: Subscription = new Subscription();
  lastActiveWidget: Observable<widgetData>
  @Output() widgetConfigChanged: EventEmitter<any> = new EventEmitter<any>();
  fieldOptionSubscription: Subscription = new Subscription();
  fileFieldOptions: string[] = [];

  barChartConfigFields: object[] = [
    { fieldLabel: 'X-Axis', fieldType: 'select' , options: this.fileFieldOptions},
    { fieldLabel: 'Y-Axis', fieldType: 'select', options: this.fileFieldOptions},
    { fieldLabel: 'Title', fieldType: 'text' },
    { fieldLabel: 'Orientation', fieldType: 'select', options: ['v', 'h'] },
  ]

  lineScatterConfigFields: object[] = [
    { fieldLabel: 'X-Axis', fieldType: 'select', options: [] },
    { fieldLabel: 'Y-Axis', fieldType: 'select', options: [] },
    { fieldLabel: 'Title', fieldType: 'text' },
    { fieldLabel: 'Mode', fieldType: 'select', options: ['lines', 'markers', 'lines+markers'] },
  ]

  constructor(public widgetDataService: WidgetDataService) { }

  ngOnInit(): void {
    this.lastActiveWidgetSubscription.add(this.widgetDataService.activeWidgetChanged$.subscribe(widget => {
      // if (widget.widgetConfigurationOptions.length === 0) {
      this.getWidgetConfigurations(widget)
      // } else {
      //   this.widgetFields = widget.widgetConfigurationOptions
      // }
    }))
    this.fieldOptionSubscription.add
      (this.widgetDataService.fieldOptionsChanged$.subscribe(
        fileFields => {
          this.barChartConfigFields = [
            { fieldLabel: 'X-Axis', fieldType: 'select' , options: fileFields},
            { fieldLabel: 'Y-Axis', fieldType: 'select', options: fileFields},
            { fieldLabel: 'Title', fieldType: 'text' },
            { fieldLabel: 'Orientation', fieldType: 'select', options: ['v', 'h'] },
          ];
          this.lineScatterConfigFields = [
            { fieldLabel: 'X-Axis', fieldType: 'select', options: fileFields },
            { fieldLabel: 'Y-Axis', fieldType: 'select', options: fileFields },
            { fieldLabel: 'Title', fieldType: 'text' },
            { fieldLabel: 'Mode', fieldType: 'select', options: ['lines', 'markers', 'lines+markers'] }
          ]
        }
      ))
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

  onWidgetConfigChange(fieldLabel: string, newValue: string) {
    for(let formField of this.widgetFields) {
      if(formField.fieldLabel === fieldLabel) {
        formField.fieldValue = newValue
        break
      }
    }
    this.widgetConfigChanged.emit(this.widgetFields)
  }
}
