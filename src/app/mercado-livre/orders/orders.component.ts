import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  orders: any[] = [];

  constructor(
    private service: OrdersService,
    private userService: UserService,) {
    this.getOrdersBySellerId();
  }

  async getOrdersBySellerId() {
    let sellerId = await this.getSellerId();
    let path_params = ['sort=date_desc', 'startPeriod=WITH_DATE_CLOSED_6M_OLD'];
    this.service.getOrdersBySellerId(sellerId, path_params).subscribe((data: any) => {
      this.orders = data.results;
    });
  }

  async getSellerId() {
    let mlTokenData = JSON.parse(localStorage.getItem('ml-token') || '');

    return mlTokenData.user_id || '';
  }

  async getOrderShipments(orderId: string) {
    this.service.getOrderShipments(orderId).subscribe((data: any) => {
      return data;
    });

    return '';
  }

  getUserName(userId: string) {
    this.userService.getUserInfoById(userId).subscribe((data: any) => {
      console.log(data);
    });
  }

}
