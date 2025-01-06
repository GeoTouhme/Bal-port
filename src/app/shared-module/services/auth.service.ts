import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseResponse } from 'src/app/models/responses/BaseResponse';
import { User } from 'src/app/models/data/User';
import { LoginResposnse } from 'src/app/models/responses/LoginResponse';
import { api } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })


export class AuthService {
  public userChanges = new EventEmitter<User>();
  userLogout$ = new BehaviorSubject(false);
  userLogin$ = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }

  public setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    if (user.role == 'user') this.userChanges.emit(user);
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
    this.userLogin$.next(true);
  }
  login(user: any): Promise<BaseResponse<LoginResposnse>> {
    const credentials = {
      'email': user.emailOrUsername,
      'password': user.password
    };

    return this.http.post<BaseResponse<LoginResposnse>>(api.LOGIN, credentials).pipe(map(data => data)).toPromise() as Promise<BaseResponse<LoginResposnse>>;
  }
  register(form: any): Promise<BaseResponse<LoginResposnse>> {
    const credentials = {
      'email': form.email,
      'password': form.password,
      'name': form.name,
      'phone': form.phone
    };
    return this.http.post<BaseResponse<LoginResposnse>>(api.REGISTER, credentials).pipe(map(data => data)).toPromise() as Promise<BaseResponse<LoginResposnse>>;
  }
  public getDoctor(): User | null {
    const user = localStorage.getItem('user');
    return user != null ? JSON.parse(user) : null
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

}
