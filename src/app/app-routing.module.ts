import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CountryComponent } from './pages/country/country.component';

const routes: Routes = [
  {
    path: 'countries',
    canActivate: [AuthGuard],
    component: CountryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
