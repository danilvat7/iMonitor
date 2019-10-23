import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PinterestDashboardComponent } from './pinterest-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PinterestDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinterestRoutingModule {}
