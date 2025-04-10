import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, RouterOutlet],
  template: `
    <mat-toolbar color="primary">Imobilca</mat-toolbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
