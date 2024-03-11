import { widgetData } from "../Models/widgetData.model";
import { Observable, Subject } from 'rxjs';

export class WidgetDataService {
  private lastActiveWidget = new Subject<widgetData>();
  activeWidgetChanged$ = this.lastActiveWidget.asObservable();
  widgetDataStore: widgetData[] = [];
  widgetIdArray: string[] = [];
  fileFieldOptions = new Subject<string[]>();
  fieldOptionsChanged$ = this.fileFieldOptions.asObservable();

  addToWidgetDataStore(value: widgetData) {
    if (value.widgetId === '') {
      value.widgetId = this.createNewWidgetId(value.widgetType);
    }
    this.widgetDataStore.push(value);
    this.setLastActiveWidget(value)
  }

  updateWidgetDataStore(value: widgetData) {
    for (let widget of this.widgetDataStore) {
      if (widget.widgetId == value.widgetId) {
        widget.widgetConfigurationOptions = value.widgetConfigurationOptions;
      }
    }
  }

  emptyWidgetDataStore() {
    this.widgetDataStore.splice(0, this.widgetDataStore.length);
    this.widgetIdArray.splice(0, this.widgetIdArray.length);
  }

  removeWidgetFromStore(value: widgetData) {
    this.widgetDataStore.splice(this.widgetDataStore.indexOf(value), 1)
    this.widgetIdArray.splice(this.widgetIdArray.indexOf(value.widgetId), 1)
  }

  setLastActiveWidget(value: widgetData) {
    this.lastActiveWidget.next(value);
  }

  createNewWidgetId(widgetType: string): string {
    let idSuffix = 0
    for (let widgetId in this.widgetIdArray) {
      if (widgetType + idSuffix === this.widgetIdArray[widgetId]) {
        idSuffix += 1
      }
    }
    this.widgetIdArray.push(widgetType + idSuffix);
    return widgetType + idSuffix
  }

  getFileList(): string[] {
    return [...Object.keys(this.fileList)]
  }

  setFileFieldValues(fileName: string) {
    for(let file of Object.keys(this.fileList)) {
      if(fileName === file) {
        this.fileFieldOptions.next(this.fileList[file].fields)
        break
      }
    }
  }

  setFormValues(formData: any, activeWidget: widgetData) {
    activeWidget.widgetConfigurationOptions = formData
    this.updateWidgetDataStore(activeWidget)
    this.setLastActiveWidget(activeWidget)
  }

  getFieldIndex(fieldName: string, fileName:string): number {
    for(let field = 0; field < this.fileList[fileName].fields.length; field++) {
      if(fieldName === this.fileList[fileName].fields[field]) {
        return field
      }
    }
  }

  getFileFieldValues(fieldIndex:number, fileName:string): string[] {
    return this.fileList[fileName].fieldValues[fieldIndex]
  }

  fileList: any = {
    Class_Marks:
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
  }
}