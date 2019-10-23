import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { NavigationComponent } from './components';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [NavigationComponent, ExpansionPanelComponent],
  exports: [NavigationComponent, ExpansionPanelComponent]
})
export class SharedModule {}
