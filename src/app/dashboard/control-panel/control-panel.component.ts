import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { ChartService } from '../../Services/Chart.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css'
})
export class ControlPanelComponent implements OnInit{
  isCollapsed: boolean = false;
  isDroppedDown: boolean = true;
  chartFields: string[];
  @ViewChild('chartConfigForm') chartConfigForm: FormGroup;

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.chartFields = this.chartService.getChartFields()
  }

  collapseControlPanel() {
    this.isCollapsed = !this.isCollapsed;
  }

  triggerDropDown() {
    this.isDroppedDown = !this.isDroppedDown;
  }

  submitChartConfig() {
    console.log(this.chartConfigForm.value);
    this.chartService.configureChart(this.chartConfigForm.value)
    this.chartConfigForm.reset()
  }
}
