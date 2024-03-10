import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { widgetData } from '../../../Models/widgetData.model';
import { WidgetDataService } from '../../../Services/widget-data.service';
declare let Plotly: any;
// import { WidgetDataService } from '../../../Services/widget-data.service';
// import { widgetData } from '../../../Models/widgetData.model';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-bar-and-line-chart-widget',
  templateUrl: './bar-and-line-chart-widget.component.html',
  styleUrl: './bar-and-line-chart-widget.component.css'
})
export class BarAndLineChartWidgetComponent implements AfterViewInit{
  @Input() widgetObject: widgetData
  @ViewChild('widgetRef') widgetRef: ElementRef;

  constructor(private _widgetService: WidgetDataService) { }

  ngAfterViewInit(): void {
    this.plotEmptyChart(this.widgetRef.nativeElement.id,[])
  }

  plotEmptyChart(plotDiv: string, traceOne?: any) {
      let trace1: object

      if(traceOne === undefined) {
        trace1 = {
          x:[],
          y: [],
          type: this.widgetObject.widgetType,
          name: 'Title'
        };
        console.log('reached');
      } else {
        trace1 = {
          x:traceOne.chartXaxis,
          y:traceOne.chartYaxis,
          type: 'bar',
          name: 'Title'
        }
        console.log('reached1');
      }

      const data = [trace1];

      const layout = {
        title: {
          text: this.widgetObject.widgetTitle,
          font: {
            family: 'sans-serif',
            color: '#32f0dc',
            size: '36'
          },
          yref: 'paper',
        },
        plot_bgcolor: 'black',
        paper_bgcolor: 'black',
        xaxis: {
          gridcolor: '#32f0dc',
          color: '#32f0dc',
          linecolor: '#32f0dc',
          tickfont: {
            size: '18'
          }
        },
        yaxis: {
          gridcolor: '#32f0dc',
          color: '#32f0dc',
          linecolor: '#32f0dc'
        },
        showlegend: false
      };
    let trace = data
    Plotly.newPlot(plotDiv, trace, layout);
  }

  changeActiveWidget(widget: widgetData) {
    this._widgetService.setLastActiveWidget(widget);
  }

  closeChart() {
    this._widgetService.removeWidgetFromStore(this.widgetObject)
  }
}
