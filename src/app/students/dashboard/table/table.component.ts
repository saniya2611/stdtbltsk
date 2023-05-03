import { Component, OnInit } from '@angular/core';
import { Istudents } from 'src/app/shared/model/interface';
import { StudentsService } from 'src/app/shared/services/students.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
tableArray  : Array<Istudents> =this._studentService.getArray();
  constructor(private _studentService : StudentsService,private _utilityService :UtilityService ) { }

  ngOnInit(): void {
    console.log(this._studentService.getArray());
    
  }

  onDelete(id:string,fName:string){
    // console.log(this.id);
    this._studentService.onDeleteObj(id,fName)
    
  }

}
