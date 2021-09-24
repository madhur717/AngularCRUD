import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { EmployeeModel } from './employee-dash board model';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})


export class EmployeeDashboardComponent implements OnInit {

  formValue !: FormGroup;
  emplyeeModelObj: EmployeeModel = new EmployeeModel();
  employeeData !: any;
  showAdd !: boolean;
  showUpdate!: boolean;

  constructor(private formbuilder: FormBuilder,
    private api: ApiService) {
    this.employeeData = [];
  }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: [''],
    })
    this.getAllEmployee();
  }

  clickAddEmploye() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postEmployeeDetails() {
    this.emplyeeModelObj.firstName = this.formValue.value.firstName;
    this.emplyeeModelObj.lastName = this.formValue.value.lastName;
    this.emplyeeModelObj.email = this.formValue.value.email;
    this.emplyeeModelObj.mobile = this.formValue.value.mobile;
    this.emplyeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmploye(this.emplyeeModelObj)
      .subscribe((res: any) => {
        console.log(res);
        alert("Employee Added Successfully")

        let ref = document.getElementById('cancel')
        ref?.click();

        this.formValue.reset();
        this.getAllEmployee();

      },

        (err: any) => {
          alert("Something Went Wrong")

        })
  }
  getAllEmployee() {
    this.api.getEmployee()
      .subscribe((res: any) => {
        console.log(res);

        this.employeeData = res
      })
  }

  deleteEmployee(row: any) {
    this.api.deleteEmployee(row.id)
      .subscribe(res => {
        alert("Employee Deleted")
        this.getAllEmployee();
      })
      // update();
  }

  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.emplyeeModelObj.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salary'].setValue(row.salary);
  }

  updateEmployeeDetails() {
    this.emplyeeModelObj.firstName = this.formValue.value.firstName;
    this.emplyeeModelObj.lastName = this.formValue.value.lastName;
    this.emplyeeModelObj.email = this.formValue.value.email;
    this.emplyeeModelObj.mobile = this.formValue.value.mobile;
    this.emplyeeModelObj.salary = this.formValue.value.salary;

    this.api.updateEmployee(this.emplyeeModelObj, this.emplyeeModelObj.id)
      .subscribe(res => {
        alert("Updated Successfully");
        let ref = document.getElementById('cancel')
        ref?.click();

        this.formValue.reset();
        this.getAllEmployee();
      })
  }
}
