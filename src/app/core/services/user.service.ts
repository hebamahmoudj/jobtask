import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private cache = new Map<number, Observable<any>>();
  private cacheid = new Map<string, Observable<any>>(); // Cache to store API responses for each user

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string="https://reqres.in/api/users"

  getAllUsers(page:number):Observable<any>{
    if (this.cache.has(page)) {
      return this.cache.get(page)!;
    } else {
      const users$ = this._HttpClient.get(`${this.baseUrl}?page=${page}`).pipe(
        map((response: any) => response),
        shareReplay(1) // Share the response among multiple subscribers and cache it
      );
      this.cache.set(page, users$); // Store the observable in cache
      return users$;
    }
  }
  
  getuserdetails(id:string|null):Observable<any>{
    if (id && this.cacheid.has(id)) {
      return this.cacheid.get(id)!;
    } 
    else{
      const userDetails$ = this._HttpClient.get(`${this.baseUrl}/${id}`).pipe(
        shareReplay(1) // Share the response among multiple subscribers and cache it
      );
      if (id) {
        this.cache.set(Number(id), userDetails$); // Store the observable in cache
      }
      return userDetails$;
    }
  }
}
    