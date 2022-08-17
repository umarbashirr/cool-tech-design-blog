import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Post } from 'src/app/models/post';
import { CategoryService } from 'src/app/services/category/category.service';
import { PostServiceService } from 'src/app/services/post/post-service.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  public initialState = {
    id: '',
    postTitle: '',
    postImage: '',
    postCategory: [],
    postReadingTime: undefined,
    postAuthor: '',
    postCreated: new Date(),
    postDescription: '',
  };
  public post: Post = this.initialState;

  constructor(
    private postService: PostServiceService,
    private catService: CategoryService
  ) {}

  ngOnInit(): void {
    this.catService.getCategories().subscribe((response) => {
      this.post.postCategory = response;
      console.log(response);
    });
  }

  postSubmitHandler(event: any) {
    event.preventDefault();

    const {
      postTitle,
      postImage,
      postAuthor,
      postCategory,
      postDescription,
      postReadingTime,
    } = this.post;

    if (
      !postTitle ||
      !postImage ||
      !postAuthor ||
      !postCategory ||
      !postDescription ||
      !postReadingTime
    ) {
      return console.log('Missing Fields!');
    }

    this.postService.addNewPost(this.post).subscribe((response) => {
      console.log(response, 'Post Added');
    });

    this.post = this.initialState;
  }
}
