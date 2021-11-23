import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmailSender } from 'src/app/interfaces/IEmailSender.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(body: IEmailSender) {
    return this.http.post(environment.cms.api_email, body);
  }
}
