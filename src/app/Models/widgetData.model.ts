export class widgetData {
  widgetType: string;
  widgetId: string;
  widgetConfigurationOptions: object[];
  widgetRawData: object[];
  widgetTitle: string;

  constructor(widgetType: string, widgetId?: string,title?: string, configOptions?: object[], widgetRawData?: object[]) {
    this.widgetType = widgetType;
    this.widgetId = widgetId === undefined ? '' : widgetId;
    this.widgetConfigurationOptions = configOptions !== undefined ? configOptions : [];
    this.widgetRawData = widgetRawData === undefined ? [] : widgetRawData;
    this.widgetTitle = title === undefined ? this.toTitleCase(this.widgetType) : title;
  }

  toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map(function(word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ') + ' Chart';
  }
}