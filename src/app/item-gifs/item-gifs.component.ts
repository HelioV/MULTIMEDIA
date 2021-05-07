import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Gif } from './Gif';
import { ApiserviceService } from '../apiservice.service';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-item-gifs',
  templateUrl: './item-gifs.component.html',
  styleUrls: ['./item-gifs.component.scss']
})
 
export class ItemGifsComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();
  @Output() selectedGiff: EventEmitter<any> = new EventEmitter();
  constructor(private apitService: ApiserviceService) { }
  listGiff:Gif[];
  paginaAtual:number=1;
  content:any;
  finish:boolean=false;

  ngOnInit(): void 
  {
     
     this.loadData();

  }

  loadData()
  {
    this.apitService.getCars('sad').pipe(takeUntil(this.destroy$)).subscribe((datas: any[])=>{
      this.content=datas;
     if(this.content.meta['status']==200)
     {
       this.content.data.forEach((element)=>{
             this.listGiff.push({url:element.images.original['url']})
       })
     } 
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  sendGiff(event)
  {
     this.selectedGiff.emit(event);
  }

}
