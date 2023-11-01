const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

// Complete a função customerInfo() para que seu retorno seja:
// 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.' .

const customerInfo = (fullOrder) => {
    const entregador = order.order.delivery;
    const destinatario = order;
    const endereco = order.address;

    const resp = (`Olá, ${entregador.deliveryPerson}, entrega para: ${destinatario.name}, Telefone: ${destinatario.phoneNumber}, ${endereco.street}, Número: ${endereco.number}, AP: ${endereco.apartment}`);
    return resp;
}
console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
    order.name = 'Luiz Silva';

    const listPizzas = Object.keys(order.order.pizza);
    const pizzas = order.order.pizza;
    const drinks = order.order.drinks;

    let total = pizzas.marguerita.price + pizzas.pepperoni.price + drinks.coke.price;

    // Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido
    // de marguerita, pepperoni e Coca-Cola Zero é R$ 55,00.' .
    const resp = (`Olá, ${order.name}, o valor total de seu pedido de ${listPizzas[0]}, ${listPizzas[1]} e ${drinks.coke.type} é R$ ${total},00.`);
    // a. Modifique o nome da pessoa compradora para Jair Silva;
    order.name = 'Jair Silva';
    const resp1 = (`Olá, ${order.name}, o valor total de seu pedido de ${listPizzas[0]}, ${listPizzas[1]} e ${drinks.coke.type} é R$ ${total},00.`);
    // b. Modifique o valor total da compra para R$ 50,00.
    total = 50;
    const resp2 = (`Olá, ${order.name}, o valor total de seu pedido de ${listPizzas[0]}, ${listPizzas[1]} e ${drinks.coke.type} é R$ ${total},00.`);
    return resp, resp1, resp2;

}
console.log(orderModifier(order));