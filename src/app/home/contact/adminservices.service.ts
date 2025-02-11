import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Fake API

  constructor(private http: HttpClient) {}

  // ✅ Correctly defined method to submit form data
  submitForm(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}