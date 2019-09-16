import { Component, OnInit, HostBinding } from '@angular/core';
import {GamesService} from  '../../services/games.service';
import { Games } from 'src/app/models/Models';
import {Router} from  '@angular/router';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

    
    @HostBinding('class') classes ='row';
    public games:any=[];
   
  constructor(public gams:GamesService,private router:Router) 
    { 
      //this.ListGames();
      //console.log(this.games);
    }
    ngOnInit() {
      this.ListGames();
      //console.log(this.games);
    }
    ListGames(){
      this.gams.getGames().subscribe(
        res=>{
          this.games=res;
          //this.router.navigate(['/games']).then(()=>window.location.reload());
         // console.log(res);
          
        },err=>{console.error(err)});
        
      }
     
    RemoveGame(id:string)
    {
      this.gams.deleteGame(id).subscribe(
        res=>{
          
          //console.log(res);
          //this.ListGames();
          window.location.href='/games';
             
          
        },
        error=>console.error(error));
        
    }
   
    


 
}
