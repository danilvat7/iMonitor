import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinterestDashboardComponent } from './pinterest-dashboard.component';
import { PinterestRoutingModule } from './pinterest-routing.module';

@NgModule({
  imports: [CommonModule, PinterestRoutingModule],
  declarations: [PinterestDashboardComponent]
})
export class PinterestDashboardModule {}
