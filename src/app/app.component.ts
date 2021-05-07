import { Message } from './message/message';
import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import {  takeUntil,map } from 'rxjs/operators';
import { Subject,Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  conversation;
  messages: Message[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  items: Observable<any[]>;
  constructor(private apitService: ApiserviceService) { 
    //this.removeAllTutorials()
  }
  content
  currentTutorial = null;
  currentIndex = -1;
  onConversationSelected(conversation){
    this.conversation = conversation;
    
    this.updateMessages();
  }

   ngOnInit(): void {
     
  
  }

  updateMessages()
  {

    this.apitService.getAll().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {
        this.conversation.messages = data.reverse();
      });
    
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  removeAllTutorials(): void {
    this.apitService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

  refreshList(): void {
    this.currentTutorial = null;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.apitService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.conversation.messages = data;
    });
  }
}
