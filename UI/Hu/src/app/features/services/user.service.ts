import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`https://localhost:44385/api/user/`);
  }

  get(userId: number): Observable<User> {
    return this.httpClient.get<User>(`https://localhost:44385/api/user/${userId}`);
  }

  insert(user: User): Observable<User> {
    // var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    // const bodystring = JSON.stringify(user);
    return this.httpClient.post<User>(`https://localhost:44385/api/user`, user);
  }

  update(user: User): Observable<void> {
    // var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    // const bodystring = JSON.stringify(user);
    return this.httpClient.put<void>(`https://localhost:44385/api/user`, user);
  }

  delete(userId: number): Observable<User> {
    // var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    // const bodystring = JSON.stringify(user);
    return this.httpClient.delete<User>(`https://localhost:44385/api/user/${userId}`);
  }

  isNewEntity(user: User): boolean {
    return !user.id || user.id == 0;
}

}
