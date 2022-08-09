import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './Models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientEmployee';
  emplist:Employee[]=[];
  constructor(private _service:EmployeeService) { }

  ngOnInit()
  {
    this._service.GetEmployee().subscribe(data =>
      {this.emplist=data}
      );
  }
}
