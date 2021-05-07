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
     

      /*this.apitService.getCars('sad').pipe(takeUntil(this.destroy$)).subscribe((datas: any[])=>{
     this.content=datas;
     if(this.content.meta['status']==200)
     {
       this.content.data.forEach((element)=>{
             console.log(element.images.original['url'])
       })
     }
    }) */
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
