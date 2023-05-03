import { Injectable } from '@angular/core';
import { Students } from '../const/array';
import { Istudents } from '../model/interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  stdArray : Array<Istudents> = Students;
  // onDeleteObj: any;

  constructor(private _snackbarService : SnackbarService) { }

  ngOnInit():void{
    
  }
  addObj(obj:Istudents){
    this.stdArray.push(obj);
    this._snackbarService.openSnackBar(`${obj.fName} is successfully added!!`);
  }

  getArray(){
    return this.stdArray;
  }

  onDeleteObj(id:string,fName:string){
    let index = this.stdArray.findIndex((ele) => ele.id === id);
    this.stdArray.splice(index, 1);
    this._snackbarService.openSnackBar(`${fName} is successfully Deleted!!`);

  }
}
