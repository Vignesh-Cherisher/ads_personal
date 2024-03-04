import { Component } from '@angular/core';
import { NavigationService } from '../Services/navigationService.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isNewLogin:Observable<boolean>

  constructor(private navigationService: NavigationService) {  }

  ngOnInit(): void {
    this.isNewLogin = this.navigationService.checkNewLogin()
  }
}
