import {Product} from "./Product";
import Order from "./Order";
import OrderRepository from "./OrderRepository";
import Event from "./Event";

/*
Discuss the Liskov substitution principle and how it is violated here
Obviously this results in very ugly code which, even worse, will break if we add another type of product
 */

export default class OrderService {
    private readonly orderRepository: OrderRepository = new OrderRepository();

    public orderProduct(product: Product, amount: number): string {
        if (product instanceof Product) {
            const order = new Order(amount, product);
            return this.orderRepository.save(order);
        } else {
            if ((<Event>product).maxAmountOfTickets > amount) {
                const order = new Order(amount, product);
                return this.orderRepository.save(order);
            } else {
                throw new Error("Not enough tickets available")
            }
        }
    }
}