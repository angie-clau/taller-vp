import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TallerService {
    constructor(private http: HttpClient) {}

    getFormContent(): Observable < any > {
      return this.http
      .get<any>('/api/contactInfo')
    }
}
