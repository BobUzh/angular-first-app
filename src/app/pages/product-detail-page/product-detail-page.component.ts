import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { IProduct } from 'src/app/models/product.model'
import { ProductService } from 'src/app/services/product.service'

@Component({
    selector: 'app-product-detail-page',
    templateUrl: './product-detail-page.component.html',
})
export class ProductDetailPageComponent implements OnInit {
    product: IProduct
    productSubscribtion: Subscription
    productId: number

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute
    ) {
        this.productId = route.snapshot.params['id']
    }

    ngOnInit(): void {
        this.productSubscribtion = this.productService
            .getProduct(this.productId)
            .subscribe(product => (this.product = product))
    }
}
