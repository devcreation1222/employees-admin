import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesPageComponent } from './components/employees-page/employees-page.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';
import { EmployeesSummaryComponent } from './components/employees-summary/employees-summary.component';

@NgModule({
  declarations: [EmployeesPageComponent, EmployeesListComponent, EmployeesFormComponent, EmployeesSummaryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
