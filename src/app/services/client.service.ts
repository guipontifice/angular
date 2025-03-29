import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from "../model/class/Client";
import { environment } from '../../environments/environment';
import { APIResponseModel } from '../model/interface/role';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  // /api/ClientStrive/GetAllClients
  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT);
  }

  getAllUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  addUpdate(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClient", obj);
  }
  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId=" + id);

  }

  getAllEmployee(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMP);
  }

  getAllClientProject() {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_PROJECT);
  }
  
  addClientProjectUpdate(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClientProject", obj)
  }
}
