import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseResponse } from 'src/app/models/responses/BaseResponse';
import { Doctor } from 'src/app/models/data/Doctor';

@Injectable({ providedIn: 'root' })


export class AuthService {
  public userChanges = new EventEmitter<Doctor>();
  userLogout$ = new BehaviorSubject(false);
  userLogin$ = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }



  public setToken(token: string) {
    localStorage.setItem('token', token);
    this.userLogin$.next(true);
  }

  public getDoctor(): Doctor | null {
    const doctor = localStorage.getItem('doctor');
    return doctor != null ? JSON.parse(doctor) : null
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

}
