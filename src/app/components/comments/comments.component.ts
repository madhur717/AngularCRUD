import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommentServiceService } from 'src/app/core/services/comment/comment-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentList: any;
  isLoader:boolean;
  constructor(private commentSrv: CommentServiceService) { 
    this.isLoader = true;
  }

  ngOnInit(): void {
    debugger;
    this.loadComments();
  }
  loadComments() {
    debugger;
    this.commentSrv.getComments().subscribe(data => {
      debugger;
      this.commentList = data;
      this.isLoader = false;
     });
  }

}
