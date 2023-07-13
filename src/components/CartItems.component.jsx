import React, {useContext} from "react";
import ShopContext from "../context/ShopContext";



const CartItemComponent = (props) => {
    const {name, id, price, imgUrl} = props.Item;
    // {id, productName, price, productImage} = props.Item;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} =
        useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={imgUrl}/>
            <div className="description">
                <p>
                    <b>{name}</b>
                </p>
                <p> Price: ${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> -</button>
                    <input
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> +</button>
                </div>
            </div>
        </div>
    );
};

export default CartItemComponent;