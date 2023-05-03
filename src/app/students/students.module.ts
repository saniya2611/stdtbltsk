import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './dashboard/form/form.component';
import { TableComponent } from './dashboard/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
    exports:[DashboardComponent, MaterialModule],

})
export class StudentsModule { }
