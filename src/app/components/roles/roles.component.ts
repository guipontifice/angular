import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
  //string, number, boolean, date, object, array, null, undefined
  firstName: string = "Tutorial de Angular";
  angularVersion = "Version 18"
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "button";
  selectedState: string = "";

  showWelcomeAlert () {
   alert("Tá Funcionando")  
  }
    showMessage(message: string) {
      alert(message)
  }
}
