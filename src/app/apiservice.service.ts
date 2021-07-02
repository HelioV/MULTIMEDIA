import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError,map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from './message/message';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
   private REST_API_SERVER = 'https://api.giphy.com/v1/gifs/search?api_key=LC122mPAykedUbN1dUybwn2HwB1AB2oZ&q='; // api rest fake

   private REST_API_PYTHON='http://192.168.8.102:8000/';

   selectedperson:number=2220;

   private dbPath = '/message';

   tutorialsRef: AngularFireList<Message> = null;

  constructor(private httpClient: HttpClient,private fireStore: AngularFirestore,private db: AngularFireDatabase) {
    this.tutorialsRef = this.db.list(this.dbPath);
   }

   // Headers
  /* httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }*/


   // Obtem GIFS
  getCars(words): Observable<any[]> {
    return this.httpClient.get<any[]>(this.REST_API_SERVER+words+'&limit=10')
      .pipe(
        retry(2),
        catchError(this.handleError))
  } 

  getGifs(words): Observable<any[]> {
    return this.httpClient.get<any[]>(this.REST_API_PYTHON+"pesquisar/"+words)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }
  
  pegarImagens(words): Observable<any[]> {
    return this.httpClient.get<any[]>(this.REST_API_PYTHON+"pesquisarImagem/"+words);
  }
   

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

  /*getAllMessages()
  {
    return this.fireStore.collection('messages').snapshotChanges();
  }

  getAllMessage(): Observable<any[]>
  {
    
        
      return this.fireStore.collection('message').snapshotChanges();
      
  } */

  getAll(): AngularFireList<Message> {
    return this.tutorialsRef;
  }

  create(tutorial: Message): any {
    return this.tutorialsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }

  
  addMessage(message)
  {
    
    this.fireStore.collection('message').add(message).then(res=>{
      //console.log(res)
    }).catch(result=>{
      console.log(result)
    })
  }

  addMessages(message)
  {
    this.fireStore.collection('messages').add(message);
  }
  getselectedperson()
  {
    return this.selectedperson;
  }

  setSelectedPerson(person)
  {
    this.selectedperson=person;
  }
   
}
