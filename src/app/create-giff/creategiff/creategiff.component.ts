import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
@Component({
  selector: 'app-creategiff',
  templateUrl: './creategiff.component.html',
  styleUrls: ['./creategiff.component.scss']
})
export class CreategiffComponent implements OnInit {
 
  imagensDeExemplo:any;
  paginaAtual:number=1;
  @Output() clodeWindow: EventEmitter<any> = new EventEmitter();
  @Input('pesquisarImagemComPalavraDe') sentimento=null;
  constructor(private apitService: ApiserviceService) 
  {

  }

   ngOnInit(): void 
   {
     
     this.apitService.pegarImagens(this.sentimento).subscribe((datas: any[])=>{
      this.imagensDeExemplo=datas;
      
     })
  }

  SelecioneiEstaImagem(Imagem,index)
  {
    //alert(Imagem+" Index: "+index)
  }

  sendcloseWindow(event)
  {
     this.clodeWindow.emit(event);
  }



}
