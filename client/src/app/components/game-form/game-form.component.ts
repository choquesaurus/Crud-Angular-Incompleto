import { Component, OnInit, HostBinding, ɵConsole } from '@angular/core';
import {GamesService} from  '../../services/games.service';
import {Games} from  '../../models/Models';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class')classes="row";
  


  public games:Games={
    id:0,
    title:"",
    description:"", 
     image:"",
     created_at:new Date()
  }
  constructor(private game:GamesService,private router:Router,private activated:ActivatedRoute) { }

  
  ngOnInit() {
    const parameter=this.activated.snapshot.params;
    
      this.game.getGame(parameter.id).subscribe(data=>{
          this.games=data;
          console.log(this.games.description);
      });
    
    /*
    this.game.SaveGame(this.games).subscribe(data=>{
          console.log(data);
      },error=>{
          console.log(error);
      });
  */
    }
  SaveGame(){
    delete this.games.id;
    delete this.games.created_at;
    this.game.SaveGame(this.games).subscribe(
      data=>{
        console.log(data);
        window.location.href='/games';
        //this.router.navigate(['/games']);

    },error=>console.log(error)
    )

  }
  
 

}
