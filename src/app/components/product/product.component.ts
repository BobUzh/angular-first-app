import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IProduct } from 'src/app/models/product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})
export class ProductComponent {
    @Input() product: IProduct
    @Output() addToCart = new EventEmitter()
    @Output() showModal = new EventEmitter()

    constructor() {}

    onAddToCart(): void {
        this.addToCart.emit(this.product)
    }

    onShowModal(): void {
        this.showModal.emit(this.product)
    }
}
