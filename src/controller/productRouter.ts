import { IdGenerator } from './../services/IdGenerator';
import { ProductDatabase } from './../data/ProductDatabase';
import { ProductBusiness } from './../business/ProductBusiness';
import { ProductController } from './ProductController';
import express from "express";



export const productRouter = express.Router();

const idGenerator = new IdGenerator()

const productDatabase = new ProductDatabase
const userBusiness = new ProductBusiness(productDatabase,idGenerator)
const productController = new ProductController(userBusiness);

productRouter.post("/create", (req,res) => productController.create(req,res));
productRouter.get("/findByName", (req,res) => productController.findProductByName(req,res));

