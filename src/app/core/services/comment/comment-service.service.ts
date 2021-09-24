import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterService } from '../master/master.service';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private master: MasterService) {

   }

   getComments(): Observable <any> {
     debugger;
    return this.master.GET('comments');
  }
   
}
