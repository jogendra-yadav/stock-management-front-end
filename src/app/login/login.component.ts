import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router
import { environment } from '../../environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!:FormGroup;

  constructor(private router: Router, private authService: AuthServiceService) {}
  
  ngOnInit(): void {
    const token = sessionStorage.getItem('apiToken'); // Adjust this based on your storage mechanism
    if (token) {
      // Token exists, redirect to the dashboard or home page
      this.router.navigate(['/dashboard']); // or '/home' depending on your application
    }else{
      this.initForm();
    }
  }

  initForm(){
    this.formGroup = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result => {
        // Successful login logic (e.g., navigate to another page)
        console.log('Login successful', result);

        // Store token in session storage
        sessionStorage.setItem('apiToken', result.token);

        // Redirect to another page (optional)
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Failed login logic (e.g., show error message)
        console.error('Login failed', error);
      });
    }
  }
}