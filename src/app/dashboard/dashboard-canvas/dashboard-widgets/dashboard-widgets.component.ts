import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-widgets',
  templateUrl: './dashboard-widgets.component.html',
  styleUrl: './dashboard-widgets.component.css'
})
export class DashboardWidgetsComponent {
  @Input() chartData: string
}
