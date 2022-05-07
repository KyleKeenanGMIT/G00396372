import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private HttpClient:HttpClient) { }


  GetMovieData():Observable<any>{
  return  this.HttpClient.get('http://www.omdbapi.com/?s=galway&apikey=acf95f3');
  }
}
//api key for generating movie data related to key word galway.