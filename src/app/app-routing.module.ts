import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { CountryComponent } from './pages/country/country.component';

const routes: Routes = [
  {
    path: 'countries',
    canActivate: [IsLoggedInGuard],
    component: CountryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
