import { productRouter } from './controller/productRouter';
import app from "./controller/app"

app.use('/product/', productRouter)
