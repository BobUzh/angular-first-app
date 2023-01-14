import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IProduct } from 'src/app/models/product.model'

const BASE_URL = 'https://fakestoreapi.com/products'

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    url: string = BASE_URL

    _limit: string = '6'
    _sort: string = 'desc'
    _category: string | null = null

    searchParams: HttpParams = new HttpParams().set('limit', '6')

    constructor(private http: HttpClient) {}

    getCategories() {
        return this.http.get<string[]>(`${BASE_URL}/categories`)
    }

    getProducts() {
        return this.http.get<IProduct[]>(this.url, {
            params: this.searchParams,
        })

        // return this.http.get<IProduct[]>(
        //     `${BASE_URL}?sort=${this.sort}&limit=${this.limit}`
        // )
    }

    getProduct(id: number) {
        return this.http.get<IProduct>(`${BASE_URL}/${id}`)
    }

    setLimit(limit: string) {
        this._limit = limit
        this.searchParams = this.searchParams.set('limit', limit)
    }

    setSort(sort: string) {
        this._sort = sort
        this.searchParams = this.searchParams.set('sort', sort)
    }

    setCategory(category: string | null) {
        this._category = category
        this.url = category ? `${BASE_URL}/category/${category}` : BASE_URL
    }
}
