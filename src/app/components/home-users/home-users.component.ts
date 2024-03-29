import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.css']
})
export class HomeUsersComponent implements OnInit,OnDestroy{
  allusers:User[]=[];
  totalItems!: number;
  perPage!: number;
  getalluserssub=new Subscription()
  total:any;
  perpage:any;
  searchid:string='';
  pagenum!:number
  totalUsers = 0;
  pageSize = 6; // Number of users per page
  pageSizeOptions: number[] = [3, 6, 9]; // Options for users per page
  currentPage = 1;
  constructor(private _UserService: UserService){}
  ngOnInit(): void {
   
   this.loadusers();
    
  }

  loadusers(){ this._UserService.getAllUsers(this.currentPage).subscribe({next:(res)=>{
      // this.pagenum=res.page
    this.allusers=res.data;
    // this.totalItems = res.total;
    // this.perPage = res.per_page;
    // console.log(res.page);
    this.totalUsers = res.total;

  },
  error: (error) => {
    console.error('Error fetching users:', error);
  }





});}
onPageChange(event: PageEvent): void {
  this.currentPage = event.pageIndex + 1;
  this.pageSize = event.pageSize;
  this.loadusers();
} 
   ngOnDestroy(): void {
   this.getalluserssub.unsubscribe()
    
 }

}
