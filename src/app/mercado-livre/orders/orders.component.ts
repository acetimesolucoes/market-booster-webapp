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
    let path_params = ['sort=date_desc', 'limit=51', 'offset=0'];
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

  getStatus(tags: string[]) {
    if (tags.includes('paid') && tags.includes('not_delivered') && !tags.includes('pack_order')) {
      // return 'A caminho';
    }

    if (tags.includes("pack_order") && tags.includes("paid") && tags.includes("not_delivered")) {
      return 'Em trânsito';
    }

    return '-';
  }

}
