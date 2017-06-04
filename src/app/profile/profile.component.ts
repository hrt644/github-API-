import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';
import 'rxjs/add/operator/map';
@Component({
  moduleId:module.id,
  selector: 'profile',
  templateUrl:'profile.component.html',
})
export class ProfileComponent  { 
   user[];
    Repos[];
    username:string;
    constructor(private _GithubService:GithubService){
           
    

    }

    searchusers(){
    //    console.log("yes")
    this._GithubService.updateuser(this.username);

     this._GithubService.getUser().subscribe(user =>{
       
            this.user = user;
})

     this._GithubService.getRepos().subscribe(Repos =>{
     console.log(Repos);
            this.Repos = Repos;
})


    }
    
}
