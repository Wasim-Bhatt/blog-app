import { Routes, RouterModule } from "@angular/router"
import { NgModule } from "@angular/core"
import { BlogsComponent } from "./blogs/blogs.component"
import { AddBlogComponent } from "./add-blog/add-blog.component"
import { BlogDetailsComponent } from "./blog-details/blog-details.component"
import { SavedBlogsComponent } from "./saved-blogs/saved-blogs.component"


const routes:Routes=[
    {path:"",component:BlogsComponent},
    {path:"saved",component:SavedBlogsComponent},
    {path:"new",component:AddBlogComponent},
    {path:":id",component:BlogDetailsComponent},
    {path:"update/:id",component:AddBlogComponent},

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class BlogRoutingModule{}

