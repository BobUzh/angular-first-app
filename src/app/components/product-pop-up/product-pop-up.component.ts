import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IProduct } from 'src/app/models/product.model'

@Component({
    selector: 'app-product-pop-up',
    templateUrl: './product-pop-up.component.html',
})
export class ProductPopUpComponent {
    constructor(
        public dialogRef: MatDialogRef<ProductPopUpComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IProduct
    ) {}

    closeModa() {
        this.dialogRef.close()
    }
}
