import { Component } from '@angular/core';
import { NavigationService } from '../Services/navigationService.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private navigationService: NavigationService) {

  }

  swapSidePanels() {
    this.navigationService.swapSidePanels()
  }
}
