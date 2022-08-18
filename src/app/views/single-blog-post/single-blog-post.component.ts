import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostServiceService } from 'src/app/services/post/post-service.service';

@Component({
  selector: 'app-single-blog-post',
  templateUrl: './single-blog-post.component.html',
  styleUrls: ['./single-blog-post.component.css'],
})
export class SingleBlogPostComponent implements OnInit {
  id: any;
  loading: Boolean = true;
  Post: Post = {
    id: undefined,
    postTitle: undefined,
    postImage: undefined,
    postCategory: undefined,
    postReadingTime: undefined,
    postAuthor: undefined,
    postCreated: undefined,
    postDescription: undefined,
  };

  constructor(
    private route: ActivatedRoute,
    public postApi: PostServiceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');
    // this.loadPosts();
    // setTimeout(() => {
    //   this.loading = false;
    // }, 2000);
  }

  // loadPosts() {
  //   this.postApi.getPostsById(this.id).subscribe((data: any) => {
  //     this.Post = data;
  //   });
  // }
}
