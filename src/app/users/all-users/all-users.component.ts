import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/shared/model/table-column.model';
import { User } from '../model/user.model';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.less']
})
export class AllUsersComponent implements OnInit {

  page: number = 1;
  waiting: boolean = true;
  data: User[] = [];
  totalRecords: number = 0;
  cols: TableColumn[] = [];

  constructor(private _usersService: UsersService, private _router: Router) { }

  ngOnInit(): void {
    this.cols = [
      { header: 'Email', field: 'email' },
      { header: 'First Name', field: 'first_name' },
      { header: 'Last Name', field: 'last_name' },
      { header: 'Avatar', field: 'avatar' }
    ];

    this.getData();

  }

  getData() {
    this._usersService.getAll(this.page)
      .subscribe(res => {
        this.data = res.data;
        this.totalRecords = res.total as number;
        this.waiting = false;
      }, er => this.waiting = false);
  }

  paginate(event: any) {
    // this.PageSize = event.rows;
    this.page = event.page + 1;
    this.getData();
  }

  details(id: number) {
    this._router.navigate(['users/' + id])
  }


}
