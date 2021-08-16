import express, {Router} from 'express';
import {ProductsController} from "../controllers/products.controller";
import {ProductsMockRepository} from "../repositories/products/products-mock-repository";

export function productsRouters(): Router {
    const repository = new ProductsMockRepository();
    const controller = new ProductsController(repository);

    const router = express.Router();

    router.post('', (req, res) => {
        try {
            return res.json(controller.addItem(req.body));
        } catch (error) {
            res.status(500).json(error);
        }
    });

    router.get('', (_, res) => {
        return res.json(controller.getAllItems());
    });

    router.get('/:id', (req, res) => {
        return res.json(controller.getItemById(req.params.id));
    });

    router.get('/find/:name', (req, res) => {
        return res.json(controller.findProductByName(req.params.name));
    });

    router.post('/update/:id', (req, res) => {
        try {
            res.json(controller.updateItem(req.params.id, req.body));
        } catch (error) {
            res.status(500).json(error);
        }
    });

    router.post('/:id', (req, res) => {
        try {
            res.json(controller.deleteItem(req.params.id));
        } catch (error) {
            res.status(500).json(error);
        }
    });

    return router;
}