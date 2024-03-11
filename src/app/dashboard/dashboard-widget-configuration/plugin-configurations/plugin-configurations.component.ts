import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-plugin-configurations',
  templateUrl: './plugin-configurations.component.html',
  styleUrl: './plugin-configurations.component.css'
})
export class PluginConfigurationsComponent implements OnInit {
  @Input() pluginConfigType: any;
  @Output() pluginConfigChanged: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onPluginConfigChange(element: string, newValue: string) {
    this.pluginConfigChanged.emit({ fieldLabel: element, value: newValue });
  }
}
