import {ProductsRepository} from "./products-repository.interface";
import {Product} from "../../interfaces/product.interface";
import {nanoid} from 'nanoid'

export class ProductsMockRepository implements ProductsRepository {
    private products: Array<Product> = [];

    addItem(item: Product): Product {
        item.id = nanoid(10);
        item.createdAt = new Date();
        item.updatedAt = new Date();
        this.products.push(item);
        return item;
    }

    deleteItem(id: string): boolean {
        const item = this.getItemById(id);
        if (item) {
            this.products = this.products.filter(item => item.id !== id);
            return true;
        }
        return false;
    }

    findProductByName(name: string): Product {
        return this.products.find(item => item.name === name);
    }

    getAllItems(): Array<Product> {
        return this.products;
    }

    getItemById(id: string): Product {
        return this.products.find(item => item.id === id);
    }

    updateItem(id: string, item: Product): Product {
        this.products = this.products.map(i => {
            if (i.id === id) {
                return {
                    ...item,
                    id: i.id,
                    createdAt: i.createdAt,
                    updatedAt: new Date()
                };
            }
            return i;
        });
        return this.getItemById(id);
    }
}
