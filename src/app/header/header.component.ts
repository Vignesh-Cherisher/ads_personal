import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('userProfileDropdown') userProfileDropdown: ElementRef;

  isInVisualizingMode = false
  isUserDropdownActive = false

  @HostListener('window:click', ['$event'])
  public onClick(event: MouseEvent) {
    if (this.isUserDropdownActive == true && !this.userProfileDropdown.nativeElement.contains(event.target)) {
      this.isUserDropdownActive = !this.isUserDropdownActive;
    }
  }

  swapUserDropdown() {
    this.isUserDropdownActive = !this.isUserDropdownActive
  }
}
