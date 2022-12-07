import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { routes } from '../app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  routes = routes;
  constructor() {
    this.routes = routes.filter(route => route.title);
  }

  ngOnInit(): void {
  }

  getAllRoutes(routes: null | Routes, parentPath: string = ''): Routes {
    routes = routes || this.routes;
    const allRoutes: Routes = [];
    for (const route of routes) {
      if (parentPath !== '') {
        route.path = `${parentPath}/${route.path}`;
      }
      console.log("🚀 ~ file: navbar.component.ts ~ line 23 ~ NavbarComponent ~ getAllRoutes ~ route.path", route.path)
      allRoutes.push(route);
      if (route.children) {
        const children = this.getAllRoutes(route.children, route.path);
        allRoutes.push(...children);
      }
    }
    return allRoutes.filter(route => route.title);
  }
}
