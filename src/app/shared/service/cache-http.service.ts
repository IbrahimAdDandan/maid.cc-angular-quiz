import { Injectable } from '@angular/core';
import hash from 'hash-it';
import * as dayjs from 'dayjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class CacheHttpService<T> {

  readonly CACHE_DURATION_IN_MINUTES = 5;
  readonly DEFAULT_KEY = 'DEFAULT';

  private cache: {
    [id: string]: {
      expires: Date,
      value: Observable<T>
    }
  } = {};

  constructor() { }

  get(object?: any): Observable<T> | null {
    const key = object ? hash(object).toString() : this.DEFAULT_KEY;
    const item = this.cache[key];
    if (!item) {
      return null;
    }

    if (dayjs(new Date()).isAfter(item.expires)) {
      return null;
    }

    return item.value;
  }

  set(value: Observable<T>, object?: any) {
    const key = object ? hash(object).toString() : this.DEFAULT_KEY;
    const expires = dayjs(new Date())
      .add(this.CACHE_DURATION_IN_MINUTES, 'minutes')
      .toDate();
    this.cache[key] = { expires, value };
  }

  clearCache() {
    this.cache = {};
  }


}
