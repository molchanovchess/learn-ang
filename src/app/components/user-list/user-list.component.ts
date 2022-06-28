import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {User} from "../../models/User";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users:User[] = [] as User[];
  public errorMessage: string | undefined = undefined;
  

  constructor(private userService:UserService) { }

  ngOnInit(): void {

  }

  public getUsersData():void{
    this.userService.getUsers().subscribe((data:User[]) => {
      this.users = data;
    }, (error) => {
      this.errorMessage = error;
    });
  }

}
