import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.css'],
})
export class HistoryDetailsComponent implements OnInit {
  constructor() {}
  @Input() title!: string;
  @Input() historyDetails!: any;
  @Input() historyDetailsHeaders!: any;

  ngOnInit(): void {}
}
