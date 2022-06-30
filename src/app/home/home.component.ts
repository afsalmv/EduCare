import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Username :any;
  password :any;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Submit(){
    if(this.Username=="admin" && this.password==1234)
    {
    this.router.navigate(['admin']);
    }
    else
    {
      alert(' You Have entered wrong credentials  ');

    }
   }

}
