import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true;
      const username = this.f.username.value;
      const email = this.f.email.value;
      const password = this.f.password.value;
      this.authService.register(username, email, password)
        .subscribe(
          () => {
            this.successMessage = 'Registration successful';
            this.registerForm.reset();
            this.loading = false;
            setTimeout(() => { this.successMessage = ''; }, 3000);
          },
          (error) => {
            this.errorMessage = error.message || 'An unexpected error occurred';
            this.loading = false;
            setTimeout(() => { this.errorMessage = ''; }, 3000);
          }
        );
    } else {
      console.error('Form submission failed. Please check the fields.');
    }
  }
}
