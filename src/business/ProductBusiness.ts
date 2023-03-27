import { IIdGenerator } from './Ports';
import { ProductRepository } from './ProductRepository';
import { product, ProductInputDTO, FindProductInputDTO } from './../model/products';

import {CustomError,InvalidName,ProductNotFound,} from "../error/customError";

export class ProductBusiness {

  constructor(
    private productDatabase: ProductRepository,
    private idGenerator: IIdGenerator
  ){}

  public createProduct = async (input: ProductInputDTO) => {
    try {
      let {id} = input;
      const { name, tags} = input;

      if (!name || !tags) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "tags"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if(!id){
        id = this.idGenerator.generate();
      }
       const stringTags = tags.toString()

      const product: product = {
        id,
        name,
        stringTags,
      };

      await this.productDatabase.insertProduct(product);

      return product;

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findProduct = async(inputFind: string )=>{
    
    try {
      const search = inputFind ;
    
    if (!search) {
      throw new Error("Digite, um parametro para busca");
    }
    
    
    const result = await this.productDatabase.findProducts(search)

    return result
    } catch (error:any) {
      throw new CustomError(400, error.message);
    }
    
  }
}
