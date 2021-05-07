import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {


   private REST_API_SERVER = 'https://api.automotor.a2hosted.com/api/api_automotor/users'; // api rest fake

  constructor(private httpClient: HttpClient) { }

   // Headers
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


   // Obtem GIFS
  getCars(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.REST_API_SERVER)
      .pipe(
        retry(2),
        catchError(this.handleError))
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
}
