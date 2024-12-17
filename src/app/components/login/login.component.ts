import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule here
import { MatFormFieldModule } from '@angular/material/form-field'; // Angular Material form field
import { MatInputModule } from '@angular/material/input'; // Angular Material input
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onLogin(): void {
    // Prepare the login data object with email and password
    const loginData = { email: this.email, password: this.password };

    // Call the login method from the API service
    this.apiService.login(loginData).subscribe(
      (response: any) => {
        // Handle successful login without expecting a token
        // Navigate to the profile page after successful login
        this.router.navigate(['/profile']);
      },
      (error) => {
        // Log the error for debugging purposes
        console.error('Login error:', error);
        alert('Login failed! Please check your credentials and try again.');
      }
    );
  }
}
