import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, DoCheck, OnInit } from '@angular/core'
import { ICart } from 'src/app/models/cart.model'
import { CartService } from 'src/app/services/cart.service'

const enterTransition = transition(':enter', [
    style({ right: '-384px' }),
    animate('0.5s ease-in', style({ right: 0 })),
])

const exitTransition = transition(':leave', [
    style({ right: 0 }),
    animate('0.5s ease-out', style({ right: '-384px' })),
])

const fadeIn = trigger('fadeIn', [enterTransition])
const fadeOut = trigger('fadeOut', [exitTransition])

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    animations: [fadeIn, fadeOut],
})
export class CartComponent implements OnInit {
    products: ICart[]
    isShow: boolean
    error: any

    constructor(private cartServise: CartService) {
        this.cartServise.getStatus().subscribe(
            state => (this.isShow = state),
            err => (this.error = err)
        )
        this.cartServise.getProducts().subscribe(p => (this.products = p))
    }

    ngOnInit(): void {
        // this.products = this.cartServise.getProducts()
        // this.isShow = this.cartServise.getStatus()
    }

    closeCart() {
        this.cartServise.setStatus(false)
    }

    removeProduct(id: number) {
        this.cartServise.removeProduct(id)
    }

    getTotal(carts: ICart[]) {
        return this.cartServise.getTotal(carts)
    }

    updateQuantity(e: Event, id: number) {
        let value = (e.target as HTMLInputElement).value
        this.cartServise.updateQuantity(Number(value), id)
        console.log(e)
    }
}
