import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiUrl:String="http://localhost:7000/api";

  getPost(){
    return this.http.get(`${this.apiUrl}/listcontent`)
  }

  addPost(data:any){
    return this.http.post<any>(`${this.apiUrl}/addcontent`, data)
  }

  getSinglePost(id:any){
    return this.http.get<any>(`${this.apiUrl}/singlecontent/${id}`)
  }

  editPost(id:any,data:any)
  {
    return this.http.put(`${this.apiUrl}/editcontent/${id}`,data)
  }

  deletePost(id:any)
  {
    return this.http.delete(`${this.apiUrl}/deletecontent/${id}`)
  }

  getSignupList(){
    return this.http.get(`${this.apiUrl}/listsignup`)
  }
}
