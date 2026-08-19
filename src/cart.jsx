import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";



const CartPage = () => {

    const {cart, setCart} = useOutletContext();

    const items = Object.values(cart);

    function itemSubtotal(array) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            const price = array[i].quantity * array[i].price
            total = total + price;
        }
        return total;
    }
    
    let total = itemSubtotal(items);

    const updateQty = (id, change) => {
        setCart(prevCart => ({
            ...prevCart,
            [id]: {
                ...prevCart[id],
                quantity: Math.max(1, (prevCart[id]?.quantity ?? 0) + change),
            },
        }));
    }

    return (
    <div className="shoppingcartpage">
        <h1>Shopping Cart</h1>
        <div className="shoppingcartWrapper">
            {items.length > 0 ? (
            items.map((item, index) => 
            <div key={item.id} className={"itemcardwrapper"}>
                <div className="itemcard">
                    <div>
                        <img src={item.img} width="90" height="100"/>
                    </div>
                    <div>
                        <h3>{item.title}</h3>
                        <div className="quantitywrapper">
                            <p>Quantity:</p>
                            <button className="quantitybutton"
                            onClick={() => updateQty(item.id, -1)}>-</button>
                            {item.quantity}
                            <button className="quantitybutton"
                            onClick={() => updateQty(item.id, 1)}>+</button>
                        </div>
                        <p>Price: ${item.price}</p>
                    </div>
                </div>
            </div>)) : 
            <p>Cart is empty.</p>}
        </div>
        <div className="itemstotal">
            <h3>Subtotal: ${total}</h3>
        </div>
    </div>
    );
};

export default CartPage;