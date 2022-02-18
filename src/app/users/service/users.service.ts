import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User, UserResponse, UsersResponse } from '../model/user.model';
import { CacheHttpService } from 'src/app/shared/service/cache-http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends CacheHttpService<any> {

  private _URL: string = environment.baseURL + 'users';

  constructor(private _http: HttpClient) { super(); }

  getAll(page: number): Observable<UsersResponse> {
    let url = `${this._URL}?page=${page}`;
    return this.get(url) ??
      this._http.get<UsersResponse>(url).pipe(res => {
        this.set(res, url);
        return res;
      });
  }

  getOne(id: number): Observable<UserResponse> {
    let url = `${this._URL}/${id}`;
    return this.get(url) ??
      this._http.get<UserResponse>(url).pipe(res => {
        this.set(res, url);
        return res;
      });
  }

}
