import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs"
declare let Plotly: any;

@Injectable({
  providedIn: "root"
})
export class ChartService {
  private chartList = new BehaviorSubject<string[]>([])
  chartTabId:number = 0;
  private activeChartId:string = null;

  chartData: any =
    {
      "fields": [
        "Name",
        "Roll No",
        "English",
        "Tamil",
        "Maths",
        "Science",
        "Total"
      ],
      "fieldValues": [
        [
          "Ram",
          "Kumar",
          "Vignesh",
          "Sam",
          "Jhon",
          "Nisanth",
          "Naveen",
          "Guru",
          "Kani",
          "Rose",
          "Ruby",
          "Ramya"
        ],
        [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12
        ],
        [
          76,
          37,
          76,
          100,
          21,
          77,
          76,
          85,
          62,
          25,
          35,
          49
        ],
        [
          71,
          81,
          42,
          88,
          12,
          22,
          39,
          55,
          18,
          42,
          31,
          41
        ],
        [
          48,
          82,
          92,
          38,
          87,
          100,
          20,
          55,
          25,
          72,
          25,
          97
        ],
        [
          46,
          100,
          66,
          76,
          10,
          89,
          27,
          18,
          67,
          23,
          55,
          64
        ],
        [
          241,
          300,
          276,
          302,
          130,
          288,
          162,
          213,
          172,
          162,
          146,
          251
        ]
      ]
    }

  getChartFields(): string[]{
    return this.chartData.fields
  }

  getChartFieldValues(fieldIndex: number): string[]{
    return this.chartData.fieldValues[fieldIndex]
  }

  getChartList(): Observable<string[]> {
    return this.chartList.asObservable();
  }

  createChart(chartType: string) {
    const currentValue = this.chartList.value
    const updatedValue = [...currentValue, "chartTab" + this.chartTabId + 1]
    this.activeChartId = "chartTab" + this.chartTabId + 1
    this.chartList.next(updatedValue)
    setTimeout(() => {
      this.plotMultipleBar("chartTab" + this.chartTabId + 1)
      this.chartTabId++
    },300)
  }

  configureChart(chartConfigFormData: any){
    let chartConfigValues = { chartXaxis: this.getChartFieldValues(parseInt(chartConfigFormData.chartXaxis)), chartYaxis: this.getChartFieldValues(parseInt(chartConfigFormData.chartYaxis))}
    console.log(parseInt(chartConfigFormData.chartXaxis), chartConfigValues);
    this.plotMultipleBar(this.activeChartId, chartConfigValues)
  }

  plotMultipleBar(plotDiv: string, traceOne?: any) {
      let trace1: object

      if(traceOne === undefined) {
        trace1 = {
          x:[],
          y: [],
          type: 'bar',
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
          text: "Bar Chart",
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
}