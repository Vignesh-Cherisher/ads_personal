import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PluginService } from '../../Services/plugin.servive';

@Component({
  selector: 'app-available-plugins',
  templateUrl: './available-plugins.component.html',
  styleUrl: './available-plugins.component.css',
})
export class AvailablePluginsComponent {
  constructor(private pluginService: PluginService) {}
  availablePlugins: any;
  ngOnInit() {
    this.pluginService.getAvailablePlugins().subscribe((data: any) => {
      this.availablePlugins = Object.keys(data.descriptions).map((key) => ({
        name: key,
        description: data.descriptions[key],
      }));
      console.log(data)
    });
  }
}
