import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugService } from './errors/bug.service';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CommentsListComponent } from './comments-list/comments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    CommentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [BugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
