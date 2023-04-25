import { useContext } from "react";

import { myContext } from "../App";

function Cart() {
    let products = useContext(myContext);
    
    let sum = 0;

    products.forEach(product => {
        sum = sum + product.count
    })

    return (
        <div className="cart">Cart {sum}</div>
    )
}

export default Cart;