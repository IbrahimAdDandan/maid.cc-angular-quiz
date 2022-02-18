import { Component, OnInit } from '@angular/core';
import { Event, Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { ObserveSearchService } from '../service/observe-search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[] = [];
  customStyle: any;
  searchValue: string = '';

  constructor(private _observeSearch: ObserveSearchService, private _router: Router) { }

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

    this._router.events.subscribe((event: Event) => {
      this._observeSearch.changeValue('');
      this.searchValue = '';
    });

  }

  searchChanged(event: any) {
    this._observeSearch.changeValue(event.target?.value);
  }

}
