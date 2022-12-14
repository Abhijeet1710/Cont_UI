import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http : HttpClient) { }

  updateUserData = (userData) : Observable<any> => {
    return this.http.post('http://localhost:3000/user/update', userData);
  }
}
