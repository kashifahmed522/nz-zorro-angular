import { Component, OnInit } from '@angular/core';

interface ItemData {
  id: number;
  jobCode: string;
  jobName: string;
  frequency: string;
  lastExecuteTime: string;
}

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css'],
})
export class MonitorComponent implements OnInit {
  public grid: number = 4;

  public dynamicFormFieldsJSON: any = [
    {
      type: 'textbox',
      name: 'jobPeriod',
      label: 'Job Period',
      required: false,
      flexDirection: 'row',
      options: [],
    },
    {
      type: 'date',
      name: 'billingFrom',
      label: 'Billing From',
      value: '',
      required: true,
      className: 'birthDate-className',
      dateFormat: 'YYYY-MM-dd',
      placeholder: 'Please select Billing From',
    },
    {
      type: 'date',
      name: 'billingTo',
      label: 'Billing To',
      value: '',
      required: true,
      className: 'billingTo-className',
      dateFormat: 'YYYY-MM-dd',
      placeholder: 'Please select Billing To',
    },
    {
      type: 'button',
      name: 'Filter',
      value: '',
      className: 'Filter-className',
      // gridColumn: '1 / span 3',
      buttons: [
        {
          name: 'Filter',
          onClickButton: this.filterTemplate.bind(this),
        },
        {
          name: 'Export',
          onClickButton: this.filterTemplate.bind(this),
        },
      ],
    },
    // {
    //   type: 'button',
    //   name: 'Filter',
    //   value: '',
    //   className: 'Filter-className',
    //   // gridColumn: '1 / span 3',
    //   onClickButton: this.filterTemplate.bind(this),
    // },
    // {
    //   type: 'button',
    //   name: 'Export',
    //   value: '',
    //   className: 'Export-className',
    //   // gridColumn: '1 / span 3',
    //   onClickButton: this.exportTemplate.bind(this),
    // },
  ];

  filterTemplate(e: any) {
    console.log(e);
    // this.isFound = false;
  }
  exportTemplate(e: any) {
    console.log(e);
    // this.isFound = false;
  }

  LatestFormData(data: any) {
    console.log(`data`, data);
  }

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
      {
        id: 5,
        jobCode: 'process_icer_file',
        jobName: 'Process Icer File',
        frequency: 'Every 45 Minutes',
        lastExecuteTime: 'Error',
      },
      {
        id: 6,
        jobCode: 'sales_summary',
        jobName: 'Sales Summary by Months',
        frequency: 'Every 30 Minutes',
        lastExecuteTime: 'Success',
      },
      {
        id: 7,
        jobCode: 'process_icer_file',
        jobName: 'Process Icer File',
        frequency: 'Every 45 Minutes',
        lastExecuteTime: 'Error',
      },
      {
        id: 8,
        jobCode: 'sales_summary',
        jobName: 'Sales Summary by Months',
        frequency: 'Every 30 Minutes',
        lastExecuteTime: 'Success',
      },
    ];
  }
}
