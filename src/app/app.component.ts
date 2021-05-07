import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  conversation;

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private apitService: ApiserviceService) { }
  content
  onConversationSelected(conversation){
    this.conversation = conversation;
  }


   ngOnInit(): void {
     

     /*this.apitService.getCars().pipe(takeUntil(this.destroy$)).subscribe((data: any[])=>{
     this.content=data;
     console.log(this.content)
    })  */
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
