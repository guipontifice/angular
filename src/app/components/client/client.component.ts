import { Component } from '@angular/core';
import { Client } from '../../model/class/Client'
@Component({
  selector: 'app-client',
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {

  clientObj: Client = new Client();


}
