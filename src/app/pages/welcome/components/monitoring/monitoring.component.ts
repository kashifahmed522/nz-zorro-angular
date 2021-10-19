import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html'
})
export class MonitoringComponent implements OnInit {
  listOfData: Array<{ name: string; age: number; address: string }> = [];

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King`,
        age: 32,
        address: `LondonLondonLondonLondonLondon`
      });
    }
  }
}
