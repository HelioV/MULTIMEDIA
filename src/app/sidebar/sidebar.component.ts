import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from '../message/message';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  searchText: string;
  messages: Message[]=[];
  conversations = [
    {
      name: 'Helio Vicente',
      time: '18:21',
      phone:2219,
      latestMessage: 'Humm!!',
      latestMessageRead: false,
      messages:[]
    },
    {
      name: 'Denilson Martins',
      time: '8:25',
      phone:2222,
      latestMessage: 'eu vi, eu vi!  ',
      latestMessageRead: true,
      messages:[]
    },
    /*{
      name: 'Geldo Armando',
      time: '8:21',
      phone:2223,
      latestMessage: 'Estou melhorando',
      latestMessageRead: false,
      messages:this.messages=[]
    },
    {
      name: 'Eías Inácio',
      time: '8:14',
      phone:2218,
      latestMessage: 'vamos pegar',
      latestMessageRead: true,
      messages:this.messages=[]
    },*/
  ];

  get filteredConversations() {
    return this.conversations.filter((conversation) => {
      return (
        conversation.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        conversation.latestMessage
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
