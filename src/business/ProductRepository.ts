import { product } from './../model/products';

export interface ProductRepository{

    insertProduct(product: product):Promise<void>;
    
    findProducts(search: string):Promise<product | undefined>   

}