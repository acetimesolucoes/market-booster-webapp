import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashBoosterComponent } from './layouts/dash-booster/dash-booster.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'meli',
  },
  {
    path: 'meli',
    loadChildren: () =>
      import('./mercado-livre/mercado-livre-routing.module').then(
        (m) => m.MercadoLivreRoutingModule
      ),
      component: DashBoosterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
