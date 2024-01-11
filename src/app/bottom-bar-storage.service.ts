import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BottomBarStorageService {
  isBottomBarVisibleSubject = new BehaviorSubject<boolean>(true);
  isBottomBarVisible$ = this.isBottomBarVisibleSubject.asObservable();
  constructor() {}

  setBottomBarVisibility(isVisible: boolean): void {
    if (typeof localStorage !== 'undefined') {
      this.isBottomBarVisibleSubject.next(isVisible);
      localStorage.setItem('bottomBarVisibility', JSON.stringify(isVisible));
    }
  }

  getBottomBarVisibility(): boolean {
    if (typeof localStorage !== 'undefined') { // to avoid error of undefined localStorage
      const storedVisibility = localStorage.getItem('bottomBarVisibility');
      return storedVisibility ? JSON.parse(storedVisibility) : true; 
    }
    return true;
  }
}
