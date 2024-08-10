import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/models/Blog';
import { User } from 'src/app/shared/models/User';
import { BlogService } from 'src/app/shared/services/blog.service';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs:Blog[]=[]
  currentLogedinUser:User;

  constructor(
    private blogsService:BlogService,
    private userService:UserService
    
  ) { }

  ngOnInit(): void {
    this.currentLogedinUser=this.userService.getLoggedinUser()
    this.getBlogs()
  }

  getBlogs(){
    this.blogs=this.blogsService.getBlogs()
  }

  delete(id:string){
    Swal.fire({
      title: 'Delete',
      text: 'Do you really want to delete this post?',
      icon: 'info',
      confirmButtonText: 'Yes',
      cancelButtonText:'No',
      showCancelButton:true
    }).then((res)=>{
      if(res.isConfirmed){
        this.blogsService.deleteBlog(id)
        this.getBlogs()
      }
    })
  }

  savePost(blog:Blog){
    this.blogsService.saveBlog(blog)
    Swal.fire({
      title:"Success",
      text:"Saved successfully"
    })
  }

}
