import { widgetData } from "../Models/widgetData.model";
import { Observable, Subject } from 'rxjs';

import { Injectable } from '@angular/core';
import { FileService } from "./file.service";

@Injectable({
  providedIn: 'root'
})

export class WidgetDataService {
  private lastActiveWidget = new Subject<widgetData>();
  activeWidgetChanged$ = this.lastActiveWidget.asObservable();
  widgetDataStore: widgetData[] = [];
  widgetIdArray: string[] = [];
  fileFieldOptions = new Subject<string[]>();
  fieldOptionsChanged$ = this.fileFieldOptions.asObservable();
  fileList: any;

  constructor(private _fileService: FileService){
    // this.populateFileList()
   }

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

  populateFileList() {
    this.fileList = this._fileService.getFileData()
  }
}