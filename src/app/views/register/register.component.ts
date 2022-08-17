import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'src/app/models/toast';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public users: User[] = [];
  toast: Toast | undefined;

  public user: User = {
    id: uuidv4(),
    fullName: '',
    email: '',
    password: '',
    repeatPassword: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  constructor(public userApi: UserService, private router: Router) {}

  registerFormSubmitHandler(event: any) {
    // Stop browser from redirecting on submittion
    event.preventDefault();
    // Destructuring of User Data
    const { fullName, email, password, repeatPassword } = this.user;
    // Check if any of the field is empty
    if (!fullName || !email || !password || !repeatPassword) {
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
    this.userApi.addUser(this.user).subscribe((response) => {
      return console.log(response, 'User Added');
    });

    this.toast = {
      isActive: true,
      message: 'Your account has been created successfully!',
    };

    // reseting user data
    this.user = {
      id: '',
      fullName: '',
      email: '',
      password: '',
      repeatPassword: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 4000);
  }
}
