import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/models/Blog';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-saved-blogs',
  templateUrl: './saved-blogs.component.html',
  styleUrls: ['./saved-blogs.component.scss']
})
export class SavedBlogsComponent implements OnInit {

  blogs:Blog[]=[]

  constructor(
    private blogsService:BlogService,
  ) { }

  ngOnInit(): void {
    this.blogs=this.blogsService.getSavedBlogs()

  }

}
