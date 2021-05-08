import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-item-gifs',
  templateUrl: './item-gifs.component.html',
  styleUrls: ['./item-gifs.component.scss']
})
 
export class ItemGifsComponent implements OnInit {

  @Output() selectedGiff: EventEmitter<any> = new EventEmitter();
  @Input('listaDeGifs') listaGif=null;
  constructor(private apitService: ApiserviceService) { }
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

}
