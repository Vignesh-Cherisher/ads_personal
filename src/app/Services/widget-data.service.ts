import { widgetData } from "../Models/widgetData.model";
import { Subject, Observable } from 'rxjs';

export class WidgetDataService {
  private lastActiveWidget = new Subject<widgetData>();
  activeWidgetChanged$ = this.lastActiveWidget.asObservable();
  widgetDataStore: widgetData[] = [];
  widgetIdArray: string[] = [];

  addToWidgetDataStore(value: widgetData) {
    if (value.widgetId === '') {
      value.widgetId = this.createNewWidgetId(value.widgetType);
    }
    this.widgetDataStore.push(value);
    this.setLastActiveWidget(value)
    console.log(this.widgetDataStore);
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
}