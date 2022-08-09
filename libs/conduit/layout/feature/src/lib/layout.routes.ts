import { Routes } from "@angular/router";

export const layoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@ng-conduit/conduit/home/feature').then((m) => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('@ng-conduit/conduit/login/feature').then((m) => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('@ng-conduit/conduit/register/feature').then((m) => m.RegisterComponent)
  }
];
