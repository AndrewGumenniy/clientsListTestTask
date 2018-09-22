import { Injectable } from '@angular/core';
import { Subject, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private subject = new Subject<any>();

  constructor() {}

  sendMessage(message: any) {
    this.subject.next(message);
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
