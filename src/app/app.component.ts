import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostServiceService } from './services/post/post-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  Posts: any = [];

  constructor(public postApi: PostServiceService, public router: Router) {}

  ngOnInit(): void {}
}
