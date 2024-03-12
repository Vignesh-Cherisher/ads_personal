import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WidgetDataService } from '../../Services/widget-data.service';
import { Subscription } from 'rxjs';
import { widgetData } from '../../Models/widgetData.model';
import { PluginService } from '../../Services/plugin.servive';
import { FileService } from '../../Services/file.service';

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
  pluginList: any
  pluginConfigFields: any[] = [];
  widgetConfigFields: any [] = []

  @ViewChild('chartConfigForm') chartConfigForm: FormGroup;

  constructor(public widgetDataService: WidgetDataService, private _pluginService: PluginService, private _fileService: FileService) { }

  ngOnInit(): void {
    this.lastActiveWidgetSubscription.add(this.widgetDataService.activeWidgetChanged$.subscribe(widget => {
      this.lastActiveWidget = widget
    }))
    this._pluginService.getAvailablePlugins().subscribe((data: any) => {
      this.pluginList = Object.keys(data.plugIns).map((key) => ({
        name: key
      }));
      console.log(this.pluginList)
    });
    // this.pluginConfigFields[0].options = this.widgetDataService.getFileList()
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
    console.log(this.pluginConfigFields[0].options[0]);
    if(isAllPluginFieldsReceived) {
      this.widgetDataService.setFileFieldValues(this.pluginConfigFields[0].options[0])
    }
  }

  onWidgetConfigChanged(event: any) {
    this.widgetConfigFields = event
  }

  getPluginConfigFields(event: any) {
    this.pluginConfigFields = []
    let selectedPlugin = event.target.value
    for(let plugin of this.pluginList) {
      if(plugin.name === selectedPlugin) {
        this.pluginConfigFields.push({ fieldLabel: 'File', fieldType: 'select', options: [] })
      }
    }
    if (this.pluginConfigFields.length > 0 && this.pluginConfigFields[0].fieldType === 'select') {
      if(this.pluginConfigFields.length > 0 && this.pluginConfigFields[0].fieldType === 'select') {
        this.pluginConfigFields[0].options = this.widgetDataService.getFileDataFromService(selectedPlugin);
      }
    }
  }
}
