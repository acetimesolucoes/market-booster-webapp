import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  orders: any[] = [];

  constructor(private service: OrdersService,) {
    this.getOrdersBySellerId();
  }
  
  async getOrdersBySellerId() {
    let sellerId = await this.getSellerId();
    let path_params = ['sort=date_desc'];
    this.service.getOrdersBySellerId(sellerId, path_params).subscribe((data: any) => {
      this.orders = data.results;
    });
  }

  async getSellerId() {
    let mlTokenData = JSON.parse(localStorage.getItem('ml-token') || '');

    return mlTokenData.user_id || '';
  }

}
