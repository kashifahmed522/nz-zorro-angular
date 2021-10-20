import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { differenceInCalendarDays, setHours } from 'date-fns';
import { Subscription } from 'rxjs';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css'],
})
export class CreateEditComponent implements OnInit, OnDestroy {
  public grid: number = 3;

  public billingJSON = [
    {
      type: 'text',
      name: 'jobName',
      label: 'Job Name',
      value: '',
      required: true,
      className: 'jobName-className',
      gridColumn: '',
    },
    {
      type: 'text',
      name: 'jobCode',
      label: 'Job Code',
      value: '',
      required: true,
      className: 'jobCode-className',
    },
    {
      type: 'dropdown',
      name: 'selectCalendar',
      label: 'Select Calendar',
      value: 'in',
      required: true,
      className: 'selectCalendar-className',
      multiSelect: false,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' },
        { key: 'ch', label: 'China' },
        { key: 'sd', label: 'Saudi' },
      ],
    },
    {
      type: 'dropdown',
      name: 'frequency',
      label: 'Frequency',
      value: 'in',
      required: true,
      className: 'frequency-className',
      multiSelect: false,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' },
        { key: 'ch', label: 'China' },
        { key: 'sd', label: 'Saudi' },
      ],
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
      type: 'time',
      name: 'executeTime',
      label: 'Execute/Start Time(UTC)',
      value: '',
      required: true,
      className: 'executeTime-className',
      dateFormat: '',
      placeholder: 'Please select Execute/Start Time(UTC)',
    },
    {
      type: 'text',
      name: 'status',
      label: 'Status',
      value: '',
      required: false,
      className: 'status-className',
    },
    {
      type: 'dropdown',
      name: 'dependOn',
      label: 'Depend On',
      value: 'in',
      required: false,
      className: 'dependOn-className',
      multiSelect: false,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' },
        { key: 'ch', label: 'China' },
        { key: 'sd', label: 'Saudi' },
      ],
    },
    {
      type: 'dropdown',
      name: 'requestMethod',
      label: 'Request Method',
      value: 'post',
      required: true,
      className: 'requestMethod-className',
      multiSelect: false,
      options: [
        { key: 'post', label: 'POST' },
        { key: 'put', label: 'PUT' },
        { key: 'get', label: 'GET' },
        { key: 'patch', label: 'PATCH' },
      ],
    },
    {
      type: 'text',
      name: 'restURI',
      label: 'Rest URI',
      value: '',
      required: true,
      gridColumn: '2 / span 2',
      className: 'restURI-className',
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
    },
    {
      type: 'text',
      name: 'jobCode',
      label: 'Job Code',
      value: '',
      required: true,
      className: 'jobCode-className',
    },
    {
      type: 'dropdown',
      name: 'frequency',
      label: 'Frequency',
      value: 'in',
      required: true,
      className: 'frequency-className',
      multiSelect: false,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' },
        { key: 'ch', label: 'China' },
        { key: 'sd', label: 'Saudi' },
      ],
    },
    {
      type: 'text',
      name: 'restURI',
      label: 'Rest URI',
      value: '',
      required: true,
      gridColumn: '',
      className: 'restURI-className',
    },
    {
      type: 'dropdown',
      name: 'requestMethod',
      label: 'Request Method',
      value: 'post',
      required: true,
      className: 'requestMethod-className',
      multiSelect: false,
      options: [
        { key: 'post', label: 'POST' },
        { key: 'put', label: 'PUT' },
        { key: 'get', label: 'GET' },
        { key: 'patch', label: 'PATCH' },
      ],
    },
    {
      type: 'text',
      name: 'status',
      label: 'Status',
      value: '',
      required: false,
      className: 'status-className',
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
      type: 'dropdown',
      name: 'offSet',
      label: 'Offset',
      value: 'in',
      required: false,
      className: 'Offset-className',
      multiSelect: false,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' },
        { key: 'ch', label: 'China' },
        { key: 'sd', label: 'Saudi' },
      ],
    },
    {
      type: 'checkbox',
      name: 'selectDayType',
      label: 'Select Day Type',
      required: true,
      flexDirection: 'row',
      gridColumn: '1 / span 3',
      options: [
        { key: 'monday', label: 'Monday' },
        { key: 'tuesday', label: 'Tuesday' },
        { key: 'wednesday', label: 'Wednesday' },
        { key: 'thursday', label: 'Thursday' },
        { key: 'friday', label: 'Friday' },
        { key: 'saturday', label: 'Saturday' },
        { key: 'sunday', label: 'Sunday' },
      ],
    },
  ];

  constructor(
    public _subjectService$: SubjectService,
    public _router: Router
  ) {}
  // templatesData: any;
  public templatesData$!: Subscription;
  public templatesData: any;

  ngOnInit(): void {
    this.templatesData$ = this._subjectService$
      .getCopyTemplateData()
      .subscribe((templatesData$) => {
        this.templatesData = templatesData$;
        console.log(`templatesData`, this.templatesData);
        if (!this.templatesData) this._router.navigate(['/search']);
      });
  }

  LatestFormData(data: any) {
    console.log('data :>> ', data);
  }

  ngOnDestroy(): void {
    this.templatesData$.unsubscribe();
  }
}
