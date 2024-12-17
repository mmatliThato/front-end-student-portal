import { Component } from '@angular/core';
import { ApiService } from '../../api.service'; // Update the path to where ApiService is located
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HttpClientModule], // Include HttpClientModule here
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private apiService: ApiService) {}

  profile: { name: string; email: string } = { name: '', email: '' };
  isLoading: boolean = true;
  error: string = '';

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile(): void {
    // Uncomment the code below to fetch profile data when the ApiService is ready
    // this.isLoading = true;
    // this.apiService.getProfile().subscribe(
    //   (response: { name: string; email: string }) => {
    //     console.log('Profile data:', response);
    //     this.profile = response;
    //     this.isLoading = false;
    //   },
    //   (error) => {
    //     console.error('Error fetching profile:', error);
    //     this.error = 'Unable to fetch profile data.';
    //     this.isLoading = false;
    //   }
    // );
  }
}
