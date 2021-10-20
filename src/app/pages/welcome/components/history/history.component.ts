import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TableHeadersModel } from '../../model/table-header.model';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  constructor(public _subjectService$: SubjectService) {}
  public grid: number = 2;

  public billingJSON = [
    {
      type: 'text',
      name: 'jobName',
      label: 'Job Name',
      value: '',
      required: true,
      className: 'jobName-className',
      gridColumn: '',
      disabled: true,
    },
    {
      type: 'text',
      name: 'jobCode',
      label: 'Job Code',
      value: '',
      required: true,
      className: 'jobCode-className',
      disabled: true,
    },
    {
      type: 'text',
      name: 'frequency',
      label: 'Frequency',
      value: '',
      required: true,
      className: 'jobCode-className',
      disabled: true,
    },
    {
      type: 'text',
      name: 'executeTime',
      label: 'Execute/Start Time(UTC)',
      value: '',
      required: true,
      className: 'executeTime-className',
      disabled: true,
    },
  ];
  public routineJSON = [
    {
      type: 'text',
      name: 'jobName',
      label: 'Job Name',
      value: '',
      required: true,
      className: 'jobName-className',
      gridColumn: '',
      disabled: true,
    },
    {
      type: 'text',
      name: 'jobCode',
      label: 'Job Code',
      value: '',
      required: true,
      className: 'jobCode-className',
      disabled: true,
    },
    {
      type: 'text',
      name: 'frequency',
      label: 'Frequency',
      value: '',
      required: true,
      className: 'jobCode-className',
      disabled: true,
    },
    {
      type: 'text',
      name: 'executeTime',
      label: 'Execute/Start Time(UTC)',
      value: '',
      required: true,
      className: 'executeTime-className',
      disabled: true,
    },
  ];

  historyDetailsHeaders: TableHeadersModel = {
    jobCode: 'Job Code',
    jobName: 'Job Name',
    frequency: 'Frequency',
    executeStartTimeUTC: 'Execute/Start Time (UTC)',
    lastExecuteTime: 'Last Execute Time',
  };

  jobHistoryHeaders: TableHeadersModel = {
    actualStartTimeUTC: 'Actual Start Time (UTC)',
    actualEndTimeUTC: 'Actual End Time (UTC)',
    executeStatus: 'Execute Status',
    resultMessage: 'Result Message',
  };

  historyDetails = [
    {
      id: 1,
      jobName: 'Process Icer File',
      frequency: 'Every 45 Minutes',
      lastExecuteTime: 'Error',
      executeStartTimeUTC: new Date(),
    },
    {
      id: 2,
      jobName: 'Sales Summary by Months',
      frequency: 'Every 30 Minutes',
      lastExecuteTime: 'Success',
      executeStartTimeUTC: new Date(),
    },
    {
      id: 3,
      jobName: 'Process Icer File',
      frequency: 'Every 45 Minutes',
      lastExecuteTime: 'Error',
      executeStartTimeUTC: new Date(),
    },
    {
      id: 4,
      jobName: 'Sales Summary by Months',
      frequency: 'Every 30 Minutes',
      lastExecuteTime: 'Success',
      executeStartTimeUTC: new Date(),
    },
  ];

  jobHistory = [
    {
      actualStartTimeUTC: new Date(),
      actualEndTimeUTC: new Date(),
      executeStatus: 'Failed',
      resultMessage: 'Error Message',
    },
  ];

  dependedByDetails = [];

  public templatesData$!: Subscription;
  public templatesData: any;

  ngOnInit(): void {
    this.templatesData$ = this._subjectService$
      .getCopyTemplateData()
      .subscribe((templatesData$) => {
        this.templatesData = templatesData$;
      });
  }

  LatestFormData(data: any) {
    console.log('data :>> ', data);
  }

  ngOnDestroy(): void {
    this.templatesData$.unsubscribe();
  }
}
