import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs:Blog[]= []

  constructor(private userService:UserService) { }

  addBlog(blog:Blog) {
    const currentLoggedInUser=this.userService.getLoggedinUser()
    blog.id=new Date().getTime().toString()
    blog.author=currentLoggedInUser.email
    blog.author_id=currentLoggedInUser.id
    blog.date=new Date().toISOString()
    if(!blog.imgUrl)
      blog.imgUrl="https://picsum.photos/200"

    const blogs=localStorage.getItem("blogs")
    if(blogs){
      const existsingBlogs=JSON.parse(blogs)
      existsingBlogs.push(blog)
      localStorage.setItem("blogs",JSON.stringify(existsingBlogs))
    }
    else localStorage.setItem("blogs",JSON.stringify([blog]))
  }

  getBlogs() {
    const blogs=localStorage.getItem("blogs")
    if(!blogs) return []
    return JSON.parse(blogs)
  }

  getBlogById(id:string){
    const blogs=this.getBlogs()
    return blogs.find((blog:Blog)=>blog.id==id)
  }

  updateBlog(blog:Blog,id:string) {
   const blogs=this.getBlogs()
   const existingBlog = blogs.find((item:Blog)=>item.id==id)
    if(existingBlog) {
      existingBlog.title=blog.title
      existingBlog.description=blog.description

      localStorage.setItem("blogs",JSON.stringify(blogs))
    }

  }

  deleteBlog(id: string) {
    const blogs = this.getBlogs()
    const existingBlog = blogs.filter((item: Blog) => item.id != id)
    localStorage.setItem("blogs", JSON.stringify(existingBlog))

  }
  getSavedBlogs(){
    const savedBlogs=localStorage.getItem("savedBlogs")

    if(!savedBlogs) return []
    return JSON.parse(savedBlogs)
  }

  saveBlog(blog: Blog) {
    debugger
   const savedBlogs=this.getSavedBlogs()
   const existingBlog = savedBlogs.find((item:Blog)=>item.id==blog.id)
    if(!existingBlog) {
      savedBlogs.push(blog)
      localStorage.setItem("savedBlogs",JSON.stringify(savedBlogs))
    }
  }
}
