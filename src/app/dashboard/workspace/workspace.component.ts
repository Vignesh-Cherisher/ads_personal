import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartService } from '../../Services/chartService';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})
export class WorkspaceComponent {
  chartList: Observable<string[]>

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.chartService.getChartList()
      .subscribe(chartList => { this.chartList = chartList; console.log(this.chartList); })
  }
}
