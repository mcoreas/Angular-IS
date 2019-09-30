import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CommentsListComponent } from './comments-list/comments-list.component';


const routes: Routes = [
  { path: 'posts', pathMatch: 'full', component: PostsListComponent},
  { path: 'post/:postId', component: CommentsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
