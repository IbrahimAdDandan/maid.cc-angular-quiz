import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[] = [];
  customStyle: any;

  constructor() { }

  ngOnInit(): void {
    this.customStyle = {
      background: 'rgba(200, 200, 230, 0.5)', position: 'fixed', right: 0, left: 0, top: 0,
      border: 'none',
      'box-shadow': '#393939 .5 1px 10px '
    };
    this.menuItems = [
      // {
      //   label: 'Home', icon: PrimeIcons.HOME,
      //   routerLink: '/'
      // },
      {
        label: 'Users', icon: PrimeIcons.USERS,
        routerLink: 'users'
      },
    ];
  }

}
