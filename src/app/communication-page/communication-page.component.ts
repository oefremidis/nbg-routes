import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-communication-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './communication-page.component.html',
  styleUrl: './communication-page.component.css'
})
export class CommunicationPageComponent {

}
