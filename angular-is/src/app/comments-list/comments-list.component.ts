import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BugService } from '../errors/bug.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  
  CommentList: any = [];

  constructor(private data: ActivatedRoute,public bugService: BugService) { }

  ngOnInit() {
    //post id variable
    let id = this.data.snapshot.params.postId
    this.loadComments(id);
  }

  //function to show comments by the id of the post
  loadComments(id) {
    return this.bugService.GetComments(id).subscribe((data: {}) => {
      this.CommentList = data;
    })
  }

}
