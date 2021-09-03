import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TeamManagementService } from '../../services/team-management.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public _fb: FormBuilder, public _teamMngService: TeamManagementService) { }

  ngOnInit(): void {
  }
  teamForm = this._fb.group({
    teamName: ['', Validators.required],
    employees: this._fb.array([
      new FormControl()
    ], [Validators.required, Validators.maxLength(5)])
  })

  get teamName() {
    return this.teamForm.get('teamName') as FormControl;
  }

  get employees() {
    return this.teamForm.get('employees') as FormArray
  }

  onFormSubmit() {
    const emp = this.employees.at(0);
    console.log(emp.value);
    const rawVal = this.employees.getRawValue();
    console.log(rawVal);
    this._teamMngService.saveTeam(this.teamForm.value);
    this.teamForm.reset();
  }

  addEmployeeControl() {
    this.employees.push(new FormControl());
  }
  deleteEmployeeControl(index: number) {
    this.employees.removeAt(index);
  }
  insertEmployeeControl() {
    this.employees.insert(1, new FormControl());
  }
  setEmployeeControl() {
    this.employees.setControl(2, new FormControl('Shiv'));
  }
  setEmployeeValue() {
    this.clearEmployeeControls();
    this.addEmployeeControl();
    this.addEmployeeControl();
    this.addEmployeeControl();
    this.employees.setValue(['Mahesh', 'Vishal', 'Krishn']);
  }
  patchEmployeeValue() {
    this.employees.patchValue(['Mahesh', 'Vishal', 'Krishn']);
  }
  resetEmployees() {
    this.employees.reset();
  }
  clearEmployeeControls() {
    this.employees.clear();
  }

}
