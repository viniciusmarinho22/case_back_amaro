import { ProductBusiness } from './../business/ProductBusiness';
import { ProductInputDTO } from './../model/products';
import { Request, Response } from "express";

export class ProductController {

  constructor(
    private productBusiness: ProductBusiness
  ){}

  public create = async (req: Request, res: Response) => {
    try {
      
      const arquivo = require("../data/products");
      const data = arquivo.products

      
      for (let product of data){   
      
        const input: ProductInputDTO = {
          id: product.id,
          name: product.name,
          tags: product.tags
        };
      
      
        const products = await this.productBusiness.createProduct(input)
      }
        res.status(201).send({ message: "Produto criado!" });
      
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public findProductByName = async (req: Request, res: Response) => {
    try {
      const search = req.body.search

      const inputFind:string = search

      const result = await this.productBusiness.findProduct(inputFind)

      res.status(200).send(result)
    } catch (error:any) {
      res.status(400).send(error.message);
    }
  }
}
