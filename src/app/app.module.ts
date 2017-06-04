import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProfileComponent} from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {GithubService} from './services/github.service';
import { HttpModule,JsonpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule ],
  declarations: [ AppComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GithubService]
})
export class AppModule { }
