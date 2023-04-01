import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MercadoLivreComponent } from './mercado-livre.component';
import { OrdersComponent } from './orders/orders.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  {
    path: '',
    component: MercadoLivreComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'publications',
    component: PublicationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MercadoLivreRoutingModule { }
