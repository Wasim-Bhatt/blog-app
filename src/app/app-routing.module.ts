import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './feature/auth/guards/auth.guard';

const routes: Routes = [ 
  { path:'blogs',
    canLoad:[AuthGuard],
    loadChildren:()=> import('./feature/blog/blog.module').then((mod)=>mod.BlogModule)
  },
  {path:'login',loadChildren:()=>import("./feature/auth/auth.module").then(module=>module.AuthModule)},
  {path:'**',redirectTo:'blogs'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
