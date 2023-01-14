import { IProduct } from '../models/product.model'

export const isExist = (id: number, arr: IProduct[]): boolean => {
    return !!~arr.findIndex(p => p.id === id)
}
