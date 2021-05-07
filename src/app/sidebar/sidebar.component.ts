import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  searchText: string;
  conversations = [
    {
      name: 'Kipanda Carmona',
      time: '18:21',
      latestMessage: 'Humm!!',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'https://media.giphy.com/media/12Ge3LuCAofm2A/giphy.gif', time: '8:21', img:true, me: true },
        { id: 2, body: 'Bem,Muitob Bom Dia', time: '8:21', img:false, me: false },
        { id: 3, body: 'Bonito', time: '8:21', img:false, me: true },
        { id: 4, body: 'https://media.giphy.com/media/3oEduT5GkuaOiaMtG0/giphy.gif', time: '8:21', img:true, me: false },
      ],
    },
    {
      name: 'Denilson Martins',
      time: '8:25',
      latestMessage: 'eu vi, eu vi!  ',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Olá como estás?', time: '8:21', img:false, me: true },
        { id: 2, body: 'Bem,Muitob Bom Dia', time: '8:21', img:false, me: false },
        { id: 3, body: 'Bonito', time: '8:21', img:false, me: true },
        { id: 4, body: 'My Bro', time: '8:21', img:false, me: false },
      ],
    },
    {
      name: 'Geldo Armando',
      time: '8:21',
      latestMessage: 'Estou melhorando',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Olá como estás?', time: '8:21', img:false, me: true },
        { id: 2, body: 'Bem,Muitob Bom Dia', time: '8:21', img:false, me: false },
        { id: 3, body: 'Bonito', time: '8:21', img:false, me: true },
        { id: 4, body: 'Glogiff', time: '8:21', img:false, me: false },
      ],
    },
    {
      name: 'Eías Inácio',
      time: '8:14',
      latestMessage: 'vamos pegar',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Olá como estás?', time: '8:21', img:false, me: true },
        { id: 2, body: 'Bem,Muitob Bom Dia', time: '8:21', img:false, me: false },
        { id: 3, body: 'Bonito', time: '8:21', img:false, me: true },
        { id: 4, body: 'Glogiff', time: '8:21', img:false, me: false },
      ],
    },
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
