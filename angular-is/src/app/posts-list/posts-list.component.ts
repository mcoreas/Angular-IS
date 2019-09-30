import { Component, OnInit } from '@angular/core';
import { BugService } from '../errors/bug.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  PostList: any = [];

  constructor(
    public bugService: BugService
  ) { }

  ngOnInit() {
    this.loadPosts();
  }

   //function to show all posts
  loadPosts() {
    return this.bugService.GetPosts().subscribe((data: {}) => {
      this.PostList = data;
    })
  }

}
