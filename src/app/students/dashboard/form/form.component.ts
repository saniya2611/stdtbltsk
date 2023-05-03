import { Component, OnInit } from '@angular/core';
import { Istudents } from 'src/app/shared/model/interface';
import { StudentsService } from 'src/app/shared/services/students.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private _studentService : StudentsService,private _utilityService :UtilityService) { }

  ngOnInit(): void {
  }
  onAddStd(f:HTMLInputElement,l:HTMLInputElement,e:HTMLInputElement,c:HTMLInputElement){
    let obj :Istudents={
      fName : f.value,
      lName : l.value,
      email : e.value,
      contact : c.value,
      id : this._utilityService.uuid()
    }
    this._studentService.addObj(obj)
  

    f.value = '',
    l.value = '',
    e.value = '',
    c.value = ''
  
  }
}

