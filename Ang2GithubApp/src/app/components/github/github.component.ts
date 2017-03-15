import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user:any;

  constructor(private _githubService:GithubService) { 

    console.log("github comp init..");
    this._githubService.getUser().subscribe(users => {
      // console.log(users);
      this.user = users;
    })
  }

  ngOnInit() {
  }

}
