import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Posts: any = [];

  constructor(public postApi: PostServiceService, public router: Router) {
    console.log(this.Posts);
  }

  ngOnInit(): void {
    // this.loadPosts();
  }

  // loadPosts() {
  //   this.postApi.getPosts().subscribe((data: {}) => {
  //     this.Posts = data;
  //   });
  // }
}
