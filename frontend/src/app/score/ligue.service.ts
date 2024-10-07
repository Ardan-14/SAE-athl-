import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LigueService {
  private apiUrl = 'http://localhost:3001/api/contenus';

  constructor(private http: HttpClient) {}

  getCardAthlete(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/?page=ligue&section=athlètes`);
  }

}
