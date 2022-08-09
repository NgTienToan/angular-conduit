import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot([
      {
        path: '',
        loadComponent: () => import('@ng-conduit/conduit/layout/feature').then((m) => m.LayoutComponent),
        loadChildren: () => import('@ng-conduit/conduit/layout/feature').then((m) => m.layoutRoutes)
      }
    ]))
  ]
})
  .catch((err) => console.error(err));
