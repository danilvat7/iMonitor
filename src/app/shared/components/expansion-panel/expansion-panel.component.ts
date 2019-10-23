import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {
  @Input() data: any[];
  @Output() resumeClick = new EventEmitter<number | string>();
  @Output() stopClick = new EventEmitter<number | string>();

  constructor() {}

  ngOnInit() {}

  onResumeClick(id: number) {
    this.resumeClick.emit(id);
  }

  onStopClick(id: number) {
    this.stopClick.emit(id);
  }
}
