import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstagramDashboardComponent } from './instagram-dashboard.component';
import { InstagramRoutingModule } from './instagram-routing.module';

@NgModule({
  imports: [CommonModule, InstagramRoutingModule],
  declarations: [InstagramDashboardComponent]
})
export class InstagramDashboardModule {}
