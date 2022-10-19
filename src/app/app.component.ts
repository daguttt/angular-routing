import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'routing-angular';

  constructor(private router: Router) {}

  queryParams() {
    this.router.navigate(['countries'], { queryParams: { name: 'colombia' } });
  }

  logIn() {
    sessionStorage.setItem('authenticated', 'true');
  }

  logOut() {
    sessionStorage.setItem('authenticated', 'false');
  }
}
