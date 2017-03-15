import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user:any;
  repo:any;
  username:string;

  constructor(private _githubService:GithubService) { 

    console.log("github comp init..");


  }

search(){
this._githubService.updateUsername(this.username);


    this._githubService.getUser().subscribe(users => {
      // console.log(users);
      this.user = users;
    })

    this._githubService.getRepos().subscribe( repos=> {
      // console.log(repos);
      this.repo =repos;

    })
  
}
  ngOnInit() {

  }

}
