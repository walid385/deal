import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Article } from 'src/app/modules/home/components/main/main.component';
import { environment } from 'src/app/environments/environment.development';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isMenuOpen: boolean = false;
  isCartPopoverOpen: boolean = false;
  cartCount: number = 0;
  cartItems: Article[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private viewportScroller: ViewportScroller, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItemCount().subscribe((count: number) => {
      this.cartCount = count;
    });

    this.cartService.getCart().subscribe((items: Article[]) => {
      this.cartItems = items;
      this.updateTotals();
    });
  }

  updateTotals(): void {
    this.totalQuantity = this.cartItems.reduce((sum, item) => sum + (item.amount || 0), 0);
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.amount || 0), 0);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goToPart(fragment: string) {
    this.viewportScroller.scrollToAnchor(fragment);
  }

  toggleCartPopover(): void {
    this.isCartPopoverOpen = !this.isCartPopoverOpen;
  }

  goToCart(): void {
    this.router.navigateByUrl('/cart');
  }

  getStrapiImageUrl(imageUrl: string): string {
    return `${environment.strapiServerUrl}${imageUrl}`;
  }
}
