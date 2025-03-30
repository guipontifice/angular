import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from "@angular/forms";
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from "../reusable/alert/alert.component";
import { ButtonComponent } from "../reusable/button/button.component";
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe, AlertComponent, ButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client();
  clientList: Client[] = [];
  currentDate: Date = new Date();

  clientService = inject(ClientService);
  userList$: Observable<any> = new Observable<any>;

  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUser();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    });
  }
  onSaveClient() {
    // debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Cliente criado com sucesso");
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert(res.message);
      }
    })
  }
  onEdit(data: Client) {
    this.clientObj = data;
  }

  onDelete(id: number) {
    const deleting = confirm("Você quer deletar?");
    if (deleting) {
      this.clientService.deleteClientById(id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert("Cliente deletado com sucesso");
          this.loadClient();
          this.clientObj = new Client();
        } else {
          alert(res.message);
        }
      })
    }

  }
}
