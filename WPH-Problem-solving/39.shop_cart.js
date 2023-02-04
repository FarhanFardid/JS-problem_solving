function shop_cart(cart){
    let total_cost = 0;
    for(let i=0; i < cart.length; i++){
        let product = cart[i];
        let product_cost = product.price * product.quantity;
        total_cost = total_cost + product_cost;

    }
    return total_cost;
}

const shop_list = [{name: 'shirt', price: 400, quantity: 3},
{name: 'pant', price: 600, quantity: 5},
{name: 'shoe', price: 800, quantity: 3},
{name: 'watch', price: 1200, quantity: 4},
{name: 'sunglass', price: 200, quantity: 5}];

console.log("The shopping cart cost price is Taka: ",shop_cart(shop_list));

