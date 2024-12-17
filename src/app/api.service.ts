import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // Backend base URL

  constructor(private http: HttpClient) {}

  // Login method
  login(loginData: { email: string; password: string }): Observable<any> {
    const url = `${this.apiUrl}/login`; // Match the backend route
    return this.http.post<any>(url, loginData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    });
  }

  // Register method
  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }
     
 
// Fetch profile method
getProfile(): Observable<{ name: string; email: string }> {
  return this.http.get<{ name: string; email: string }>(
    `${this.apiUrl}/profile?id=1` // Adjust the endpoint as necessary
  );
}

}
