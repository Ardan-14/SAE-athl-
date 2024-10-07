import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3001/api/contact';  // Change l'URL si nécessaire

  constructor(private http: HttpClient) {}

  getContactPage(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/?page=contact`);
  }
}
