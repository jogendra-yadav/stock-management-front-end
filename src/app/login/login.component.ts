import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'; // Import the Router
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiHost = environment.apiHost;
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    const loginData = {
      userName: this.username,
      password: this.password
    };
    
    const apiUrl = this.apiHost + '/login/'; // Replace with your actual API URL

    this.http.post(apiUrl, loginData).subscribe(
      (response: any) => {
        // Successful login logic (e.g., navigate to another page)
        console.log('Login successful', response);

        // Store token in session storage
        sessionStorage.setItem('apiToken', response.token);

        // Redirect to another page (optional)
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Failed login logic (e.g., show error message)
        console.error('Login failed', error);
      }
    );
  }
}