import { Component } from '@angular/core';
import { PublicationsService } from '../services/publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {

  publications: any[] = [];

  constructor(private service: PublicationsService,) {
    this.getPublications();
  }

  async getPublications() {
    let sellerId = await this.getSellerId();

    this.service.getPublicationsBySellerId(sellerId).subscribe((data: any) => {
      this.getItemsByListIds(data.results);
    })
  }

  async getSellerId() {
    let mlTokenData = JSON.parse(localStorage.getItem('ml-token') || '');

    return mlTokenData.user_id || '';
  }

  async getItemsByListIds(ids: string[]) {
    this.service.getItemsByListIds(ids).subscribe((data: any) => {
      data.map((item: any) => {
        this.publications.push(item.body);
      });
    })
  }

}
