import * as express from "express";
import { createProduct, getByProductId, getProductsList } from "src/controller/product";

const homeRouterConfig = express.Router();

homeRouterConfig.post("/addProduct", createProduct);
homeRouterConfig.get("/products", getProductsList)
homeRouterConfig.get("/getProductDetails/:id", getByProductId)

export default homeRouterConfig;