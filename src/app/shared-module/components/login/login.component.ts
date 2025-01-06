import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading: boolean = false
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      emailOrUsername: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).then(response => {
        if (response.success == true) {
          if (response.data != null && response.data.user != null && response.data.token != null) {

            // login success and data is not null
            this.authService.setUser(response.data.user);
            this.authService.setToken(response.data.token);
            if (response.data.user.role == 'admin') { // login as admin
              this.router.navigate(['admin'], { replaceUrl: true });
            } else { // login as doctor
              this.router.navigate(['cart'], { replaceUrl: true });
            }
          } else { // data is null
            const message = response.responseCode == 429 ? 'You sent too many requests in last few minutes' : 'Invalid Credentials'

          }
          this.loading = false;
        } else { // login failed
          this.loading = false;
        }
      }).catch(error => {

      });
    }

  }
}
