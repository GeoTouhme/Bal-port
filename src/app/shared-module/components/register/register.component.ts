import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loading = false
  registerForm: FormGroup;


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required], // Form control for phone number
    });
  }

  // Handle phone input changes
  onPhoneInputChange(event: any): void {
    const phoneControl = this.registerForm.get('phone');
    phoneControl?.setValue(event.target.value); // Update form control value
    phoneControl?.markAsTouched();
  }
  submit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).then(response => {
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


