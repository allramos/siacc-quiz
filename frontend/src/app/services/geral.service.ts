import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  url = 'http://localhost:3000'

  constructor(
    private http: HttpClient,
    @Inject('endpoint') protected endpoint: string,
  ) {
    this.url = `${this.url}${this.endpoint}`
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}`, data).pipe(catchError(this.handleError))
  }

  getAll(subRota1?: string, subRota2?: string, subRota3?: string, subRota4?: string): Observable<any> {
    subRota1 = subRota1 ? '/' + subRota1 : ''
    subRota2 = subRota2 ? '/' + subRota2 : ''
    subRota3 = subRota3 ? '/' + subRota3 : ''
    subRota4 = subRota4 ? '/' + subRota4 : ''

    return this.http.get<any[]>(`${this.url}${subRota1}${subRota2}${subRota3}${subRota4}`).pipe(catchError(this.handleError))
  }

  getAllFilter(nomeAtributo: string, valorBuscado: string): Observable<any> {
    let params = new HttpParams();
    params = params.append(nomeAtributo, valorBuscado);
    // console.log(nomeAtributo, valorBuscado);



    return this.http.get<any[]>(`${this.url}/busca`, { params: params }).pipe(catchError(this.handleError))
  }

  getOne(id: number, subRota1?: string, subRota2?: string, subRota3?: string, subRota4?: string): Observable<any> {
    subRota1 = subRota1 ? '/' + subRota1 : ''
    subRota2 = subRota2 ? '/' + subRota2 : ''
    subRota3 = subRota3 ? '/' + subRota3 : ''
    subRota4 = subRota4 ? '/' + subRota4 : ''

    return this.http.get<any>(`${this.url}/${id}${subRota1}${subRota2}${subRota3}${subRota4}`).pipe(catchError(this.handleError))
  }

  update(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/${id}`, data).pipe(catchError(this.handleError))
  }

  remove(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
