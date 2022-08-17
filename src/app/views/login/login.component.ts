import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user = {
    email: '',
    password: '',
  };
  toast = {
    isActive: true,
    message: 'Missing Fields!',
  };

  constructor(public userApi: UserService, private router: Router) {}

  ngOnInit(): void {}

  loginFormSubmitHandler(event: any) {
    // Stop browser from redirecting on submittion
    event.preventDefault();
    // Destructuring of User Data
    const { email, password } = this.user;
    // Check if any of the field is empty
    if (!email || !password) {
      // console.log('Missing Fields!');
      return (this.toast = {
        isActive: true,
        message: 'Missing Fields!',
      });
    }

    // Subscribing to User Api and Sending User data to database
    this.userApi.addUser(this.user).subscribe((response) => {
      return console.log(response, 'User Added');
    });

    this.toast = {
      isActive: true,
      message: 'Login Successfully',
    };

    // reseting user data
    this.user = {
      email: '',
      password: '',
    };

    return setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 2000);
  }
}
