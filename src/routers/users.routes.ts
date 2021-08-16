import express, {Router} from 'express';
import {UsersMockRepository} from "../repositories/users/users-mock-repository";
import {UsersController} from "../controllers/users.controller";

export function usersRouters(): Router {
    const repository = new UsersMockRepository();
    const controller = new UsersController(repository);

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

    router.get('/find/:email', (req, res) => {
        return res.json(controller.findUserByEmail(req.params.email));
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