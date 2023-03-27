import { ProductRepository } from './../business/ProductRepository';
import { product } from './../model/products';
import { CustomError } from "../error/customError";
import { BaseDatabase } from "./BaseDatabase";


export class ProductDatabase extends BaseDatabase implements ProductRepository {
  
  public async insertProduct(product: product){
    try {
      
      
     
      await ProductDatabase.connection("Products_amaro")
        .insert({
          id: product.id,
          name: product.name,
          tags: product.stringTags,
        })
      // }
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public async findProducts  (search: string) {
    try {
     
    const resultId = await ProductDatabase.connection.raw(`
      SELECT * FROM Products_amaro
      WHERE id LIKE "%${search}%"
    `)

    const resultName = await ProductDatabase.connection.raw(`
    SELECT * FROM Products_amaro
    WHERE name LIKE "%${search}%"
    `)

    const resultTags = await ProductDatabase.connection.raw(`
      SELECT * FROM Products_amaro
      WHERE tags LIKE "%${search}%"
    `)

      if(resultId[0].length >= 1){
        return resultId[0]
      } else if (resultName[0].length >= 1){
        return resultName[0]
      } else if (resultTags[0].length >= 1){
        return resultTags[0]
      } else {
        return "Produto não encontrado!"
      }
              
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
