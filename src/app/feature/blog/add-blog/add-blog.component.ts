import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/shared/models/Blog';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  blogForm: FormGroup;
  blog:Blog;
  
  constructor(
    private blogService:BlogService,
    private router:Router,
    private activatedRoute:ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"]
    if(id){
     this.blog = this.blogService.getBlogById(id)
    }
    this.initializeForm()
  }

  initializeForm() {
    this.blogForm = new FormGroup({
      title: new FormControl(this.blog?.title||'', Validators.required),
      description: new FormControl(this.blog?.description||'', Validators.required),
      imgUrl: new FormControl(this.blog?.imgUrl||'')
    });
  }

  createPost(){
    if (this.blogForm.valid) {
      if(this.blog)
        this.blogService.updateBlog(this.blogForm.value,this.blog.id!)
      else this.blogService.addBlog(this.blogForm.value)
      this.router.navigate(["/blogs"])

    }
  }


}
