import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WidgetDataService } from '../../Services/widget-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-widget-configuration',
  templateUrl: './dashboard-widget-configuration.component.html',
  styleUrl: './dashboard-widget-configuration.component.css'
})
export class DashboardWidgetConfigurationComponent {
  isCollapsed: boolean = false;
  isDroppedDownArray: boolean[] = [true, true]
  private lastActiveWidgetSubscription: Subscription = new Subscription();

  pluginList: string[] = ['Excel']
  pluginConfigFields: object[] = [{ fieldLabel: 'File', fieldType: 'select' }, { fieldLabel: 'File Name', fieldType: 'text' }];

  pluginConfigForm: object[]

  @ViewChild('chartConfigForm') chartConfigForm: FormGroup;

  constructor(public widgetDataService: WidgetDataService) { }

  ngOnInit(): void {
    this.lastActiveWidgetSubscription.add(this.widgetDataService.activeWidgetChanged$.subscribe(widget => {
      console.log(widget);
    }))
  }

  collapseControlPanel() {
    this.isCollapsed = !this.isCollapsed;
  }

  triggerDropDown(configIndex: number) {
    this.isDroppedDownArray[configIndex] = !this.isDroppedDownArray[configIndex]
  }

  submitChartConfig() {
    const combinedFormData = {
      ...this.chartConfigForm.value,
      childInput:
    }
    console.log(this.chartConfigForm.value);
    this.chartConfigForm.reset()
  }

  onElementChanged(event: any) {
    this.pluginConfigForm.
  }
}
