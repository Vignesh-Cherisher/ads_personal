import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { widgetData } from '../../../Models/widgetData.model';
import { WidgetDataService } from '../../../Services/widget-data.service';
import { NEVER, Subscription } from 'rxjs';
declare let Plotly: any;

@Component({
  selector: 'app-bar-and-line-chart-widget',
  templateUrl: './bar-and-line-chart-widget.component.html',
  styleUrl: './bar-and-line-chart-widget.component.css'
})
export class BarAndLineChartWidgetComponent implements AfterViewInit{
  @Input() widgetObject: widgetData
  @ViewChild('widgetRef') widgetRef: ElementRef;
  activeWidgetSubscription: Subscription = new Subscription()

  constructor(private _widgetService: WidgetDataService) { }

  ngAfterViewInit(): void {
    this.createChartInstance(this.widgetRef.nativeElement.id,[])
    this.activeWidgetSubscription.add(this._widgetService.activeWidgetChanged$.subscribe(
      (widget) => {
        console.log(widget);
        if(widget.widgetId === this.widgetRef.nativeElement.id && widget.widgetType === this.widgetObject.widgetType) {
          this.plotBarChart(widget)
        }
      }
    ))
  }

  plotBarChart(widget: widgetData) {
    let formData = (widget.widgetConfigurationOptions)['widgetConfiguration']
    let pluginConfig = (widget.widgetConfigurationOptions)['pluginConfiguration']
    let traceValue = {
      widgetXaxis:this._widgetService.getFileFieldValues(
                  this._widgetService.getFieldIndex
                    (this.getValueFromFormData('X-Axis', formData) ,
                    this.getValueFromFormData('File', pluginConfig)),
                    this.getValueFromFormData('File', pluginConfig)),
      widgetYaxis: this._widgetService.getFileFieldValues(
                      this._widgetService.getFieldIndex
                      (this.getValueFromFormData('Y-Axis', formData) ,
                      this.getValueFromFormData('File', pluginConfig)),
                      this.getValueFromFormData('File', pluginConfig)),
    }
    let instanceTitle = this.getValueFromFormData('Title', formData)
    let instanceOptions;
    if(this.getValueFromFormData('Orientation', formData) !== undefined){
      instanceOptions = this.getValueFromFormData('Orientation', formData)
    } else if(this.getValueFromFormData('Mode', formData) !== undefined){
      instanceOptions = this.getValueFromFormData('Mode', formData)
    }
    this.createChartInstance(widget.widgetId, traceValue, instanceTitle === undefined ? widget.widgetTitle : instanceTitle, instanceOptions)
  }

  getValueFromFormData(targetLabel: string, formData: any[]): string {
    for(let i =0; i < formData.length; i++) {
      if(formData[i].fieldLabel === targetLabel) {
        return formData[i].fieldValue
      }
    }
    return undefined
  }

  createChartInstance(plotDiv: string, traceOne?: any, widgetTitle?: string, traceOptions?: string) {
    let trace1: object
    if(traceOne === undefined) {
      trace1 = {
        x:[],
        y: [],
        type: this.widgetObject.widgetType,
        name: 'Title',
        orientation: traceOptions
      };
    } else if (this.widgetObject.widgetType == 'bar'){
      trace1 = {
        x:traceOne.widgetXaxis,
        y:traceOne.widgetYaxis,
        type: this.widgetObject.widgetType,
        name: 'Title',
        orientation: traceOptions
      }
    } else {
      trace1 = {
        x:traceOne.widgetXaxis,
        y:traceOne.widgetYaxis,
        type: this.widgetObject.widgetType,
        name: 'Title',
        mode: traceOptions
      }
    }

    const data = [trace1];

    const layout = {
      title: {
        text: widgetTitle,
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

    var config = {responsive: true}

    let trace = data
    Plotly.newPlot(plotDiv, trace, layout, config);
  }

  changeActiveWidget(widget: widgetData) {
    console.log(widget);
    this._widgetService.setLastActiveWidget(widget);
  }

  closeChart() {
    this._widgetService.removeWidgetFromStore(this.widgetObject)
  }
}
