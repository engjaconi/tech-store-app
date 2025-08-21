import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Header } from './shared/header/header';
import { SideNav } from './shared/side-nav/side-nav';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Header, 
    SideNav, 
    MatSidenavModule, 
    MatButtonModule, 
    MatIconModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tech-store-app');
}
