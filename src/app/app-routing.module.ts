import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard/facebook',
    loadChildren: () =>
      import('./features/facebook-dashboard/facebook-dashboard.module').then(
        m => m.FacebookDashboardModule
      )
  },
  {
    path: 'dashboard/instagram',
    loadChildren: () =>
      import('./features/instagram-dashboard/instagram-dashboard.module').then(
        m => m.InstagramDashboardModule
      )
  },
  {
    path: 'dashboard/pinterest',
    loadChildren: () =>
      import('./features/pinterest-dashboard/pinterest-dashboard.module').then(
        m => m.PinterestDashboardModule
      )
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/main-dashboard/main-dashboard.module').then(
        m => m.MainDashboardModule
      )
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
