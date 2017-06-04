import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService{
    private username:string;
    private client_id='ea59ec8773ba8d03e424';
    private client_secret='00899007f9a4887ab9b669294c838bb252d6adcd';
    constructor(private _http:Http){
        console.log('Github Service Ready...');
        this.username = 'bradtraversy';
    }
    
    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username + '?client_id=' + this.client_id + '&client_secret='+ this.client_secret)
            .map((res => res.json())
    }

     getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username + "/repos"+ '?client_id=' + this.client_id + '&client_secret='+ this.client_secret)
            .map((res => res.json())
    }



    updateuser(username:string){
        this.username=username;
    }
}