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
  ngOnInit(): void {

    
     this.listGiff=
       [
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/l0Iy797ZhIvLhm0Io/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/X8mtsz8N5CBGv4WSgr/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/GCvktC0KFy9l6/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/yP6rlwwW7Rdu0/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},

        
        ]
     /*this.apitService.getCars().pipe(takeUntil(this.destroy$)).subscribe((data: any[])=>{
     this.content=data;
     console.log(this.content)
    })  */
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
