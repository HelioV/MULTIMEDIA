import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() conversation;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible;
  message = '';
  now:Date;
  gifon:boolean=false;
  showgifselection:boolean=false;
  constructor() {}

  ngOnInit(): void {}

  submitMessageapi(event)
  {
    console.log("Vamos analisar o evento fornecido")
  }
  submitMessage(event) {
    let value = event.target.value.trim();
    this.message = '';
    if (value.length < 1) return false;
    let sms = value.substring(value.length - 4)
    this.now = new Date
    if(sms==".gif" || sms==".GIF")
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
   }
   submitGif(event) {
    let value = event.trim();
    this.message = '';
    if (value.length < 1) return false;
    let sms = value.substring(value.length - 4)
    this.now = new Date
    if(sms==".gif" || sms==".GIF")
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

  escrevendoAlgo(event:any)
  {
    console.log("Digitou:"+event.target.value);
  }
}
