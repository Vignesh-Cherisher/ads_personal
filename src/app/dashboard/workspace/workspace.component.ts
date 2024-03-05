import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartService } from '../../Services/Chart.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})
export class WorkspaceComponent {
  chartList: Observable<string[]>

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.chartList = this.chartService.getChartList()
  }
}
