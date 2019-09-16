import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import{Games}from '../models/Models';
@Injectable({
  providedIn: 'root'
})
export class GamesService {
  api_uri="http://localhost:3000/api";
  constructor(private http:HttpClient) 
  {
  }
  
  getGames(){
    return  this.http.get(`${this.api_uri}/games`);
  }
  getGame(id:string){
      return this.http.get(`${this.api_uri}/games/${id}`);
  }
  deleteGame(id:string){
      return this.http.delete(`${this.api_uri}/games/${id}`);
  }
  updateGame(id:string,updategame:Games){
      return this.http.put(`${this.api_uri}/games/${id}`,updategame);
  }
  SaveGame(game:Games){
    return this.http.post(`${this.api_uri}/games`,game); 
  }


}
