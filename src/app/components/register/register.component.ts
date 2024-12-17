import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '../../api.service';  // Import ApiService
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(): void {
    this.apiService.register(this.user).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']); // Redirect to login after successful registration
      },
      error: (error) => {
        console.error('Registration failed', error);
  
        // Display user-friendly error message
        if (error.status === 404) {
          console.error('API endpoint not found. Please check the URL.');
        } else if (error.status === 500) {
          console.error('Server error. Please try again later.');
        } else {
          console.error('An unknown error occurred.');
        }
      },
    });
  }
  



  
}
