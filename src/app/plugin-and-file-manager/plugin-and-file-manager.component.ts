import { Component } from '@angular/core';

@Component({
  selector: 'app-plugin-and-file-manager',
  templateUrl: './plugin-and-file-manager.component.html',
  styleUrl: './plugin-and-file-manager.component.css'
})
export class PluginAndFileManagerComponent {
  isPluginOptionsDroppedDown: boolean = true;
  isFileOptionsDroppedDown: boolean = true;

  triggerPluginDropDown() {
    this.isPluginOptionsDroppedDown = !this.isPluginOptionsDroppedDown;
  }

  triggerFileDropDown() {
    this.isFileOptionsDroppedDown = !this.isFileOptionsDroppedDown;
  }
}
