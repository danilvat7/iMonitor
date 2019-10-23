import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookDashboardComponent } from './facebook-dashboard.component';

// Routing
import { FacebookRoutingModule } from './facebook-routing.module';

// Shsred
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, FacebookRoutingModule, SharedModule],
  declarations: [FacebookDashboardComponent]
})
export class FacebookDashboardModule {}
