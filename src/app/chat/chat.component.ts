import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() conversation;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible;
  listaDeGifs:any;
  message = '';
  now:Date;
  gifon:boolean=false;
  showgifselection:boolean=false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private apitService: ApiserviceService) { }

  ngOnInit(): void {}

  submitMessageapi(event)
  {
    let value = event.target.value.trim();
    if (value.length < 1) return false;
    this.apitService.getGifs(value).pipe(takeUntil(this.destroy$)).subscribe((datas: any[])=>{
     this.listaDeGifs=datas;
     this.showgifselection=true;
    })
    
  }
  submitMessage(event) {
    let value = event.target.value.trim();
    this.message = '';
    if (value.length < 1) return false;
    let sms = value.substring(value.length - 4)
    this.now = new Date
    if(sms==".gif" || sms==".GIF" || sms=="ct=g")
    {
      this.conversation.latestMessage = "GIF";
      this.conversation.messages.unshift({
        id: 1,
        body: value,
        time: this.now.getHours()+":"+this.now.getMinutes(),
        me: true,
        img:true,
      });
    }else 
    {
      this.conversation.latestMessage = value;
    this.conversation.messages.unshift({
      id: 1,
      body: value,
      time: this.now.getHours()+":"+this.now.getMinutes(),
      me: true,
      img:false,
    });
    }
    
  }

  emojiClicked(event) {
    this.message += event.emoji.native;
  }

  selecionouGif(event)
   {
     this.submitGif(event);
     this.showgifselection=false;
     this.gifon=false;
   }
   submitGif(event) {
    let value = event.trim();
    this.message = '';
    if (value.length < 1) return false;
    let sms = value.substring(value.length - 4)
    this.now = new Date

      this.conversation.latestMessage = "GIF";
      this.conversation.messages.unshift({
        id: 1,
        body: value,
        time: this.now.getHours()+":"+this.now.getMinutes(),
        me: true,
        img:true,
      });
    
    
  }

  escrevendoAlgo(event:any)
  {
    console.log("Digitou:"+event.target.value);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
