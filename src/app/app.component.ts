import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /** 当前激活的产品 Tab：CMDB 或 ITCM */
  activeProduct: 'cmdb' | 'itcm' = 'cmdb';

  /** 导航栏是否已滚动（加深背景） */
  isScrolled = false;

  /** CTA 预约演示 */
  demoEmail = '';
  demoSubmitted = false;

  /** 移动端导航菜单 */
  mobileMenuOpen = false;

  switchProduct(product: 'cmdb' | 'itcm'): void {
    this.activeProduct = product;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  @HostListener('document:keydown.escape', [])
  onEscape(): void {
    this.closeMobileMenu();
  }

  submitDemo(): void {
    if (!this.demoEmail.trim()) {
      return;
    }
    this.demoSubmitted = true;
  }
}
