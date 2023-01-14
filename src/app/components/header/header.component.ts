import { ViewportScroller } from '@angular/common'
import { Component } from '@angular/core'
import { CartService } from 'src/app/services/cart.service'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    countProductsInCart: number

    constructor(private cartService: CartService) {
        this.cartService
            .getProducts()
            .subscribe(products => (this.countProductsInCart = products.length))
    }

    showCart() {
        this.cartService.setStatus(true)
    }

    scroll() {
        const element: HTMLElement | null = document.getElementById('about')
        element?.scrollIntoView({ behavior: 'smooth' })
    }
}
