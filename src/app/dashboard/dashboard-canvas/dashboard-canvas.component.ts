import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartService } from '../../Services/Chart.service';

@Component({
  selector: 'app-dashboard-canvas',
  templateUrl: './dashboard-canvas.component.html',
  styleUrl: './dashboard-canvas.component.css'
})
export class DashboardCanvasComponent {
  chartList: Observable<string[]>

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.chartList = this.chartService.getChartList()
  }
}
