import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private showHeaderAndFooterSubject = new BehaviorSubject<boolean>(true);

  // Observable that components can subscribe to
  showHeaderAndFooter$: Observable<boolean> = this.showHeaderAndFooterSubject.asObservable();

  // Method to toggle the header and footer visibility
  toggleHeaderAndFooter(value: boolean) {
    this.showHeaderAndFooterSubject.next(value);
  }
}