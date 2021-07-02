import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
@Component({
  selector: 'app-item-gifs',
  templateUrl: './item-gifs.component.html',
  styleUrls: ['./item-gifs.component.scss']
})
 
export class ItemGifsComponent implements OnInit {

  @Output() selectedGiff: EventEmitter<any> = new EventEmitter();
  @Output() selectedcriarGif: EventEmitter<any> = new EventEmitter();
  @Output() clodeWindow: EventEmitter<any> = new EventEmitter();
  @Input('listaDeGifs') listaGif=null;
  constructor() { }
  paginaAtual:number=1;
  content:any;
  finish:boolean=false;

  ngOnInit(): void 
  {
     
  }

  sendGiff(event)
  {
     this.selectedGiff.emit(event);
  }

  sendCriarGiff(event)
  {
     this.selectedcriarGif.emit(event);
  }

  sendcloseWindow(event)
  {
     this.clodeWindow.emit(event);
  }

}
