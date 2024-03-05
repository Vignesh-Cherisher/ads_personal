import { BehaviorSubject, Observable } from "rxjs";

export class NavigationService {
  private isNewLogin = new BehaviorSubject<boolean>(true);

  checkNewLogin():Observable<boolean> {
    return this.isNewLogin.asObservable();
  }

  showSidePanels(){
    this.isNewLogin.next(false);
  }
}