import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from "../model/class/Client";
import { environment } from "../../environments/environment.development";
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {

  }

  getAllClients(): Observable<Client> {
    return this.http.get<Client>(environment.API_URL + "GetAllDesignation");
  }
}
