import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** 当前激活的产品 Tab：CMDB 或 ITCM */
  activeProduct: 'cmdb' | 'itcm' = 'cmdb';

  switchProduct(product: 'cmdb' | 'itcm'): void {
    this.activeProduct = product;
  }
}
