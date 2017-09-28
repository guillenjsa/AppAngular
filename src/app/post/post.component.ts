import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  providers: [PostService]
})
export class PostComponent {

  posts: IPost[];

  constructor( private postService: PostService) {
    this.postService.getPost().subscribe(posts =>
      this.posts = posts
    );
  }

}

interface IPost {
  id: string;
  title: string;
  body: string;
}
