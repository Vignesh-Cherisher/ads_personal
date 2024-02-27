import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  isCollapsed = false

  collapseToolbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
