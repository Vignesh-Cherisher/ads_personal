import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  successMessage: string = ''
  errorMessage: string = ''
  loading: boolean = false;
    // Custom password validator function
    passwordValidator = Validators.compose([
      Validators.required, // Password is required
      Validators.minLength(8), // Minimum length of 8 characters
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/) // Pattern that enforces the required complexity rules
    ]);
  
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")) {
      this.route.navigate(['dashboard/plugin-file-view'])
    }
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
      password: ['', this.passwordValidator]
    });
    setTimeout(()=>{
      localStorage.setItem("user","user")
    },5000)
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
            const username = this.f.username.value
            const password = this.f.password.value
            this.authService.login(username, password)
                .subscribe({
                  next: () => {
                    this.successMessage = 'Login successful. You will be redirected soon.'
                    localStorage.setItem("user",username)
                    this.loginForm.reset()
                    this.route.navigate(['dashboard/plugin-file-view'])
                    this.loading = false
                    setTimeout(() => { 
                      this.successMessage = '';
                   }, 3000)
                },
                error:(error) => {
                    this.errorMessage = error
                    this.loading = false
                    setTimeout(() => { this.errorMessage = ''; }, 3000)
                }
                }
                )
    } else {
      console.error('Form submission failed. Please check the fields.');
    }
  }
}
