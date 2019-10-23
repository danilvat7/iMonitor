import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard.component';
import { MainDashboardRoutingModule } from './main-dashboard-routing.module';

@NgModule({
  imports: [CommonModule, MainDashboardRoutingModule],
  declarations: [MainDashboardComponent]
})
export class MainDashboardModule {}
