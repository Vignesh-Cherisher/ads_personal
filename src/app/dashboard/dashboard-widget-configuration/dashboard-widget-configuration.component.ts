import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WidgetDataService } from '../../Services/widget-data.service';
import { Subscription } from 'rxjs';
import { widgetData } from '../../Models/widgetData.model';

@Component({
  selector: 'app-dashboard-widget-configuration',
  templateUrl: './dashboard-widget-configuration.component.html',
  styleUrl: './dashboard-widget-configuration.component.css'
})
export class DashboardWidgetConfigurationComponent {
  isCollapsed: boolean = false;
  isDroppedDownArray: boolean[] = [true, true]
  // isAllFieldInputsReceived: boolean = false
  private lastActiveWidgetSubscription: Subscription = new Subscription();
  lastActiveWidget: widgetData
  pluginList: string[] = ['Excel']
  pluginConfigFields: any[] = [{ fieldLabel: 'File', fieldType: 'select', options: [] }, { fieldLabel: 'File Name', fieldType: 'text' }];
  widgetConfigFields: any [] = []

  @ViewChild('chartConfigForm') chartConfigForm: FormGroup;

  constructor(public widgetDataService: WidgetDataService) { }

  ngOnInit(): void {
    this.lastActiveWidgetSubscription.add(this.widgetDataService.activeWidgetChanged$.subscribe(widget => {
      this.lastActiveWidget = widget
    }))
    this.pluginConfigFields[0].options = this.widgetDataService.getFileList()
  }

  collapseControlPanel() {
    this.isCollapsed = !this.isCollapsed;
  }

  triggerDropDown(configIndex: number) {
    this.isDroppedDownArray[configIndex] = !this.isDroppedDownArray[configIndex]
  }

  submitChartConfig() {
    const combinedFormData:any = {
      ...this.chartConfigForm.value,
      pluginConfiguration: this.pluginConfigFields,
      widgetConfiguration: this.widgetConfigFields
    }
    this.widgetDataService.setFormValues(combinedFormData, this.lastActiveWidget)
    this.chartConfigForm.reset()
  }

  onPluginConfigChanged(event: any) {
    let isAllPluginFieldsReceived: boolean = true
    for(let formField of this.pluginConfigFields) {
      if(formField.fieldLabel === event.fieldLabel) {
        formField.fieldValue = event.value
      }
      if(formField.fieldValue === undefined) {
        isAllPluginFieldsReceived = false
      }
    }
    if(isAllPluginFieldsReceived) {
      this.widgetDataService.setFileFieldValues(this.pluginConfigFields[0].options[0])
    }
  }

  onWidgetConfigChanged(event: any) {
    this.widgetConfigFields = event
  }
}
