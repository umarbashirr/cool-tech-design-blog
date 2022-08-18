import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'src/app/models/toast';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public users: User[] = [];
  toast: Toast | undefined;
  responseData: any;

  public user: User = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  constructor(public userApi: UserService, private router: Router) {}

  registerFormSubmitHandler(event: any) {
    // Stop browser from redirecting on submittion
    event.preventDefault();
    // Destructuring of User Data
    const { name, email, password, repeatPassword } = this.user;
    // Check if any of the field is empty
    if (!name || !email || !password || !repeatPassword) {
      // console.log('Missing Fields!');
      return (this.toast = {
        isActive: true,
        message: 'Missing Fields!',
      });
    }
    // Checking if both passwords matching
    if (repeatPassword !== password) {
      // console.log('Password does not match!');
      return (this.toast = {
        isActive: true,
        message: 'Password does not match!',
      });
    }
    // Subscribing to User Api and Sending User data to database
    this.userApi.addUser(this.user).subscribe({
      next: (response) => {
        this.responseData = response.message;
        this.toast = {
          isActive: true,
          message: this.responseData,
        };
        // reseting user data
        this.user = {
          name: '',
          email: '',
          password: '',
          repeatPassword: '',
        };

        return setTimeout(() => {
          this.router.navigateByUrl('login');
        }, 4000);
      },
      error: (error) => {
        this.responseData = error.error.message;
        return (this.toast = {
          isActive: true,
          message: this.responseData,
        });
      },
    });

    return this.responseData;
  }
}
