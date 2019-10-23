import { Component, OnInit } from '@angular/core';
import { FacebookService } from './facebook.service';

@Component({
  selector: 'app-facebook-dashboard',
  templateUrl: './facebook-dashboard.component.html',
  styleUrls: ['./facebook-dashboard.component.scss']
})
export class FacebookDashboardComponent implements OnInit {
  compains: any[] = [];
  constructor(private facebookService: FacebookService) {}

  ngOnInit() {
    this.facebookService.getCompains().subscribe(res => {
      this.compains = res.slice(0, 10);
    });
  }

  onResumeClick(id: number) {
    this.compains.forEach(item => {
      if (item.Id === id) {
        item.IsPaused = false;
      }
    });
  }

  onStopClick(id: number) {
    this.compains.forEach(item => {
      if (item.Id === id) {
        item.IsPaused = true;
      }
    });
    this.facebookService.pausedCompains(id).subscribe();
  }
}
