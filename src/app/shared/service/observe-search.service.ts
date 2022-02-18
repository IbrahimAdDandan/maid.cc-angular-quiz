import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserveSearchService {

  searchValue: Subject<string> = new Subject();

  constructor() { }

  changeValue(newVal: string) {
    this.searchValue?.next(newVal);
  }

  getChanges() {
    return this.searchValue?.asObservable();
  }

}
