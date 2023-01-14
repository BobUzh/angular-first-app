import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { ICart } from '../models/cart.model'
import { IProduct } from '../models/product.model'

@Injectable({
    providedIn: 'root',
})
export class CartService {
    isShowCart = new BehaviorSubject<boolean>(false)
    countProducts = new BehaviorSubject<number>(0)

    // products: IProduct[] = []
    products = new BehaviorSubject<ICart[]>([])

    constructor() {
        if (localStorage.getItem('cart')) {
            let products = JSON.parse(localStorage.getItem('cart') || '')

            this.products.next(products)
            this.setCount(products.length)
        }
    }

    private _saveToLocalStorage() {
        const data = JSON.stringify(this.products.getValue())
        localStorage.setItem('cart', data)
    }

    addProduct(product: ICart) {
        let isExist = !!~this.products
            .getValue()
            .findIndex(p => p.id === product.id)

        if (isExist) {
            console.log('add')

            // this.products.error('alredy exist!')
        } else {
            let newProducts = [...this.products.getValue(), product]
            this.products.next(newProducts)
        }

        this._saveToLocalStorage()
    }

    removeProduct(id: number) {
        let newProducts = this.products.getValue().filter(p => p.id != id)
        this.products.next(newProducts)
    }

    getProducts() {
        return this.products
    }

    clearProduct(): void {
        this.products.next([])
        this._saveToLocalStorage()
    }

    getStatus(): Observable<boolean> {
        return this.isShowCart
    }

    setStatus(flag: boolean): void {
        this.isShowCart.next(flag)
    }

    getCount(): Observable<number> {
        return this.countProducts
    }

    setCount(count: number) {
        this.countProducts.next(count)
    }

    getTotal(carts: ICart[]) {
        return carts
            .reduce(
                (prev: number, current: ICart) =>
                    prev + Number(current.price) * current.quantity,
                0
            )
            .toFixed(2)
    }

    updateQuantity(quantity: number, id: number) {
        let products = [...this.products.getValue()]
        let item = products.find(p => p.id == id)
        item!.quantity = quantity ?? 1

        this.products.next(products)
        this._saveToLocalStorage()
    }
}
