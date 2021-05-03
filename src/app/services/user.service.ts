import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${BASE_URL}`);
  }
}
