import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-plugin-configurations',
  templateUrl: './plugin-configurations.component.html',
  styleUrl: './plugin-configurations.component.css'
})
export class PluginConfigurationsComponent implements OnInit {
  @Input() pluginConfigType: any;
  @Output() elementChanged: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  onElementChange(element: any, newValue: string) {
    this.elementChanged.emit({ element, newValue });
  }
}
