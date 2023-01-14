import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Subscription } from 'rxjs'
import { ProductPopUpComponent } from 'src/app/components/product-pop-up/product-pop-up.component'
import { IProduct } from 'src/app/models/product.model'
import { CartService } from 'src/app/services/cart.service'
import { ProductService } from 'src/app/services/product.service'

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
    categories: string[] = []
    products: IProduct[]
    productSubscription: Subscription

    constructor(
        private productService: ProductService,
        public modal: MatDialog,
        private cartService: CartService
    ) {}

    ngOnInit(): void {
        this.getProducts()
        this.productService
            .getCategories()
            .subscribe(c => (this.categories = c))
    }

    getProducts(): void {
        this.productService.getProducts().subscribe(data => {
            this.products = data
        })
    }

    showModal(product: IProduct): void {
        this.modal.open(ProductPopUpComponent, { data: product })
    }

    updateSort(sort: string) {
        this.productService.setSort(sort)
        this.getProducts()
    }

    updatePerPage(perPage: string) {
        this.productService.setLimit(perPage)
        this.getProducts()
    }

    updateCategory(category: string | null) {
        this.productService.setCategory(category)
        this.getProducts()
    }

    addToCart(product: IProduct) {
        this.cartService.addProduct({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
        })
    }
}
