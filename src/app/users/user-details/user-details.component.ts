import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { User } from '../model/user.model';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {

  items: MenuItem[] = [];
  userId: number | undefined;
  user: User = new User();
  waiting: boolean = true;

  constructor(private _usersService: UsersService, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this._activeRoute.snapshot.params?.id;
    this.items = [
      { label: 'Users', routerLink: '/users', routerLinkActiveOptions: { exact: true } },
      { label: 'User Details', routerLink: this._activeRoute.url, routerLinkActiveOptions: { exact: true }, },
    ];
    this.getData();
  }

  getData() {
    this.waiting = true;
    if (this.userId)
      this._usersService.getOne(this.userId as number)
        .subscribe(res => {
          this.user = res.data;
          this.waiting = false;
        }, er => this.waiting = false);
  }

}
