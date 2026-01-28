import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Header, Footer],
  template: `
    <div class="min-vh-100 d-flex flex-column">
      <!-- Header Navigation -->
      <app-header></app-header>

      <!-- Main Content -->
      <main class="flex-grow-1">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
  `]
})
export class AppComponent {
  title = 'trouve-ton-artisan';
}