import { Component, Input, OnInit } from '@angular/core';

interface ItemData {
  id: number;
  jobCode: string;
  jobName: string;
  frequency: string;
  lastExecuteTime: string;
}

@Component({
  selector: 'app-copytemplatetable',
  templateUrl: './copytemplatetable.component.html',
  styleUrls: ['./copytemplatetable.component.css'],
})
export class CopyTemplateTableComponent implements OnInit {
  @Input() title!: string;
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      },
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 !== 0)
        );
        this.refreshCheckedStatus();
      },
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 === 0)
        );
        this.refreshCheckedStatus();
      },
    },
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: readonly ItemData[] = [];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: any, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach((item) =>
      this.updateCheckedSet(item.id, value)
    );
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) =>
      this.setOfCheckedId.has(item.id)
    );
    this.indeterminate =
      this.listOfCurrentPageData.some((item) =>
        this.setOfCheckedId.has(item.id)
      ) && !this.checked;
  }

  ngOnInit(): void {
    this.listOfData = [
      {
        id: 1,
        jobCode: 'process_icer_file',
        jobName: 'Process Icer File',
        frequency: 'Every 45 Minutes',
        lastExecuteTime: 'Error',
      },
      {
        id: 2,
        jobCode: 'sales_summary',
        jobName: 'Sales Summary by Months',
        frequency: 'Every 30 Minutes',
        lastExecuteTime: 'Success',
      },
      {
        id: 3,
        jobCode: 'process_icer_file',
        jobName: 'Process Icer File',
        frequency: 'Every 45 Minutes',
        lastExecuteTime: 'Error',
      },
      {
        id: 4,
        jobCode: 'sales_summary',
        jobName: 'Sales Summary by Months',
        frequency: 'Every 30 Minutes',
        lastExecuteTime: 'Success',
      },
    ];
  }
}
