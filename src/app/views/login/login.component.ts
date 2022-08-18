import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
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
  public toast = {
    isActive: true,
    message: 'Missing Fields!',
  };
  isLoginFailed: Boolean = false;
  isLoggedIn: Boolean = false;

  constructor(
    public userApi: UserService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

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
    this.userApi.loginUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.tokenStorage.saveToken(data.userResult.token);
        this.tokenStorage.saveUser(data.userResult);
        this.toast = {
          isActive: true,
          message: data.message,
        };
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // reseting user data
        this.user = {
          email: '',
          password: '',
        };
        this.reloadPage();
      },
      error: (err) => {
        this.isLoginFailed = true;
        this.toast = {
          isActive: true,
          message: err.error.message,
        };
      },
    });

    return this.user;
  }
  reloadPage(): void {
    window.location.reload();
  }
}
