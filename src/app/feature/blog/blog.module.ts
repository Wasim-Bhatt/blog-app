import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';
import { SavedBlogsComponent } from './saved-blogs/saved-blogs.component';



@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailsComponent,
    AddBlogComponent,
    SavedBlogsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
