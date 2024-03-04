import { Component } from '@angular/core';
import { NavigationService } from '../../Services/navigationService.service';

@Component({
  selector: 'app-upload-file-and-plugin',
  templateUrl: './upload-file-and-plugin.component.html',
  styleUrl: './upload-file-and-plugin.component.css'
})
export class UploadFileAndPluginComponent {


  constructor(private navigationService: NavigationService){

  }

  showSidePanels() {
    this.navigationService.showSidePanels();
  }
}
