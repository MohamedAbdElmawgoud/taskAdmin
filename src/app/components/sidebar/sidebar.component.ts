import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
// Dashboard 
// advanced sales 
// payment pages
// promocodes
// reports
// my account
// team
// finanicals
// { path: '/icons', title: 'advanced sales',  icon:'ni-planet text-blue', class: '' },
// { path: '/maps', title: 'payment pages',  icon:'ni-pin-3 text-orange', class: '' },
// { path: '/user-profile', title: 'promocodes',  icon:'ni-single-02 text-yellow', class: '' },
// { path: '/user-profile', title: 'my account',  icon:'ni-single-02 text-yellow', class: '' },
// { path: '/tables', title: 'reports',  icon:'ni-bullet-list-67 text-red', class: '' },
// { path: '/login', title: 'team',  icon:'ni-key-25 text-info', class: '' },
// { path: '/register', title: 'finanicals',  icon:'ni-circle-08 text-pink', class: '' }
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'advanced sales',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'payment pages',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/e-reservation', title: 'E-reservation',  icon:'ni-paper-diploma text-red', class: '' },
    { path: '/user-profile', title: 'my account',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'reports',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
