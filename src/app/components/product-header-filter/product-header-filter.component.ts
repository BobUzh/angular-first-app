import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'app-product-header-filter',
    templateUrl: './product-header-filter.component.html',
})
export class ProductHeaderFilterComponent {
    @Input() categories: string[]
    @Output() updateSort = new EventEmitter()
    @Output() updatePerPage = new EventEmitter()
    @Output() updateCategory = new EventEmitter()

    constructor() {}

    onUpdateSort(sort: string) {
        this.updateSort.emit(sort)
    }

    onUpdatePerPage(perPage: number) {
        this.updatePerPage.emit(perPage)
    }

    onUpdateCategory(category: string | null) {
        this.updateCategory.emit(category)
    }
}
