import { Injectable } from '@angular/core';
import { Question } from './qtn';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QtnService {

  private questionsUrl = 'http://localhost:5000/api/questions';

  getQtns(): Observable<Question[]>{
     
    return this.http.get<Question[]>(this.questionsUrl)
    };


  addQtns(qtn:Question): Observable<Question>{
    return this.http.post<Question>(this.questionsUrl+'/add',qtn);
  };

  deleteQtn(id:string):Observable<Question>{
    return this.http.delete<Question>(this.questionsUrl+`/delete/${id}`);
  }

  getQtn(id:string):Observable<Question>{
     
    return this.http.get<Question>(this.questionsUrl+`/edit/${id}`);
    };

  updateQtn(qtnn:Question): Observable<Question>{
    return this.http.put<Question>(this.questionsUrl+`/edit/${qtnn._id}`,qtnn);
  };

  constructor(private http:HttpClient) { }
}
