import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IRole, APIResponseModel } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit {

  roleList: IRole[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }
  getAllRoles() {
    this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: APIResponseModel) => {
      this.roleList = res.data;
    })
  }
  // //string, number, boolean, date, object, array, null, undefined
  // firstName: string = "Tutorial de Angular";
  // angularVersion = "Version 18"
  // version: number = 18;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = "button";
  // selectedState: string = "";

  // showWelcomeAlert () {
  //  alert("Tá Funcionando")  
  // }
  //   showMessage(message: string) {
  //     alert(message)
  // }
}
