import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { widgetData } from '../../Models/widgetData.model';
import { WidgetDataService } from '../../Services/widget-data.service';

@Component({
  selector: 'app-dashboard-canvas',
  templateUrl: './dashboard-canvas.component.html',
  styleUrl: './dashboard-canvas.component.css'
})
export class DashboardCanvasComponent implements OnInit{
  widgetList: widgetData[] = [];
  activeWidgetChanged: Subscription = new Subscription();

  constructor(private widgetDataService: WidgetDataService) { }

  ngOnInit(): void {
    this.activeWidgetChanged.add(this.widgetDataService.activeWidgetChanged$.subscribe(() => {
      this.widgetList = this.widgetDataService.widgetDataStore
    }))
  }

  closeAllWidgets() {
    this.widgetDataService.emptyWidgetDataStore()
  }
}
