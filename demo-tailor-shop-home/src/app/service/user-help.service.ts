import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api-response';
import { ApiResponseUserHelp } from '../model/api-response-user-help';

@Injectable({
  providedIn: 'root'
})
export class UserHelpService {

  constructor(private http: HttpClient) { }

  public getUserHelp(): Observable<ApiResponseUserHelp> {
    return this.http.get<ApiResponseUserHelp>(`${environment.baseUri}/api/userHelp/v1/appGuide`);
  }

  public contactUs(userName: string, email: string, comments: string, receivePromotion: string): Observable<HttpResponse<ApiResponse>> {
    let header = new HttpHeaders();
    header.set('content-type', 'application/x-www-form-urlencoded');
    const requestBody = new HttpParams()
      .set('userName', userName)
      .set('email', email)
      .set('comments', comments)
      .set('receivePromotion', receivePromotion)
    return this.http.post<ApiResponse>(`${environment.baseUri}/api/userHelp/v1/contactUs`, requestBody, {
      observe: 'response'
    });
  }
}
