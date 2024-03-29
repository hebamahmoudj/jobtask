import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit,OnDestroy {
  userid:string|null='';
  userdetails:any=null;
  userdetailssub=new Subscription()

  constructor(private _ActivatedRoute:ActivatedRoute,private _UserService:UserService,private _Router:Router){

    this._ActivatedRoute.paramMap.subscribe({next:(params)=>{this.userid=params.get('id')}})
    console.log(this.userid);
    
    
  }
  ngOnInit(): void {
    this._UserService.getuserdetails(this.userid).subscribe({next:(res)=>{this.userdetails=res.data
      console.log(res);
      
    
    }})

    
  }
  backtohome(){
    this._Router.navigate(['/home'])


  }
  ngOnDestroy(): void {
    this.userdetailssub.unsubscribe();
    
  }


}
