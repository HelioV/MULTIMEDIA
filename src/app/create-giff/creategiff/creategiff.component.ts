import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
@Component({
  selector: 'app-creategiff',
  templateUrl: './creategiff.component.html',
  styleUrls: ['./creategiff.component.scss']
})
export class CreategiffComponent implements OnInit {
 
  imagensDeExemplo:any;
  paginaAtual:number=1;
  constructor(private apitService: ApiserviceService) 
  {

  }

   ngOnInit(): void 
   {
     this.apitService.pegarImagens("Felicidade").subscribe((datas: any[])=>{
      this.imagensDeExemplo=datas;
     })   
  }

  SelecioneiEstaImagem(Imagem,index)
  {
    //alert(Imagem+" Index: "+index)
  }



}
