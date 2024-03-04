import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-tabs',
  templateUrl: './chart-tabs.component.html',
  styleUrl: './chart-tabs.component.css'
})
export class ChartTabsComponent {
  @Input() chartData: string
}
