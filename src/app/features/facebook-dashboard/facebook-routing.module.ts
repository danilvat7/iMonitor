import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacebookDashboardComponent } from './facebook-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FacebookDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookRoutingModule {}
