import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/shared/models/Blog';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blog:Blog
  constructor(
    private blogsService:BlogService,
    private activatedRoute:ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"]
    if(id){
     this.blog = this.blogsService.getBlogById(id)
    }

  }

}
