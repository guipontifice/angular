import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from "@angular/forms";
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientService = inject(ClientService);
  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    console.log(Client)
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
      } else {
        alert(res.message);
      }
    })
  }
}
