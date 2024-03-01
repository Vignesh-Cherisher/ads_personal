export class NavigationService {
  isNewLogin: boolean = true;

  showSidePanels(){
    this.isNewLogin = false;
  }
}