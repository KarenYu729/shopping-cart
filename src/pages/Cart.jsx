import storeItems from "../data/items.json"
import './Cart.style.css'
import ShopContext from "../context/ShopContext";
import CartItemsComponent from "../components/CartItems.component";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";

const Cart = () => {
    const {cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();
    return (
        <div className={"cart"}>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className={"cart"}>

                {
                    storeItems.map(Item => {

                        if (cartItems[Item.id] !== 0) {
                            return <CartItemsComponent Item={Item}/>;
                        }
                    })
                }

            </div>
            {
                totalAmount > 0 ? (
                    <div className="checkout">
                        <p> Subtotal: ${totalAmount} </p>
                        <button onClick={() => navigate("/shopping-cart/store")}> Continue Shopping</button>
                        <button
                            onClick={() => {
                                checkout();
                                navigate("/shopping-cart/checkout");
                            }}
                        >
                            {" "}
                            Checkout{" "}
                        </button>
                    </div>
                ) : (
                    <h1> Your Shopping Cart is Empty</h1>
                )
            }

        </div>
    )
}

export default Cart;