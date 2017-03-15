import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpModule, RequestOptions,Http } from '@angular/http'; 


@Injectable()
export class GithubService {
  private username ='Pulkit219';
  private client_id='ced62cc82307391899ad';
  private client_secret='6f9d91776e333e43f692b736109238e9bf591193';

  constructor(private _http:Http) {
    
    console.log("github service init..."); 
  
}

getUser(){
  this._http.get("https://api.github.com/users/"+ this.username)
  .map(res => res.json());
}

}
