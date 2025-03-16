import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MasterComponent } from './components/master/master.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularCurso';
}
