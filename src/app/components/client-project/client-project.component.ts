import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';

@Component({
  selector: 'app-client-project',
  imports: [],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.scss'
})
export class ClientProjectComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl(""),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(""),
  })

  clientSrv = inject(ClientService);
  employeeList: Employee[] = [];
  clientList: Client[] = [];
  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
  }
  getAllEmployee() {
    this.clientSrv.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    })
  }

  getAllClient() {
    this.clientSrv.getAllClients().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    })
  }
}
