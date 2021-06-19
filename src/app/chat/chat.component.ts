import { Teste } from './../message/teste';
import { Message } from '../message/message';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import {  takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() conversation;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @Output() atualizarmessages: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible;
  listaDeGifs:any;
  message = '';
  now:Date;
  gifon:boolean=false;
  showgifselection:boolean=false;
  ineedCreate:boolean=false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private apitService: ApiserviceService) { }

  ngOnInit(): void { 
    this.apitService.setSelectedPerson(this.conversation.phone)
    
  }

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
    let value = String(event.target.value.trim());
    this.message = '';
    if (value.length < 1) return false;
    let sms = value.substring(value.length - 4)
    this.now = new Date
    
      this.conversation.latestMessage = value;
      const smss:Message={
        id: this.conversation.phone==2219? 2222: 2219,
        body: value,
        time: this.now.getHours()+":"+this.now.getMinutes(),
        img:false,
        me: this.conversation.phone==2219? true: false
      }
      

       this.apitService.create(smss);
       
       
    
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

    const smss:Message={
      id: this.conversation.phone==2219? 2222: 2219,
      body: value,
      time: this.now.getHours()+":"+this.now.getMinutes(),
      img:true,
      me: this.conversation.phone==2219? true: false
    }
    
     //this.conversation.messages.unshift(smss);
     //this.atualizarmessages.emit(event);
     //this.apitService.addMessage(smss); criar no firestore

     this.apitService.create(smss).then(res=>{
             console.log("Sucesso")
     }).catch(res=>{
            console.log("erro")
     })
     
    
    
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
