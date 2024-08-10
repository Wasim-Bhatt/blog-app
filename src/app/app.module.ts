import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from './shared/services/user.service';
import { CommonDataService } from './shared/services/common-data.service';
import { BlogService } from './shared/services/blog.service';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';


@NgModule({
  declarations: [AppComponent, TopNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],

  providers: [UserService, CommonDataService, BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
