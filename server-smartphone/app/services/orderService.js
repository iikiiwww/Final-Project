const Order = require('../api/v1/orders/model');

const createOrder = async (name, email, address, type, color) => {
    const order = await Order.create({ name, email, address, type, color });
    return order;
}

const getOrders = async () => {
    const orders = await Order.find();
    return orders;
}

module.exports = { createOrder, getOrders }