import React, {createContext, useState} from "react";
import storeItems from "../data/items.json";

// need to keep track of states and functions
// that need to be access everywhere in our project
const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < storeItems.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = storeItems.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    };

    const checkout = () => {
        setCartItems(getDefaultCart());
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
    };

    // When you write a JSX expression with opening and closing tags,
    // the content passed between them is referred to as their “child”.
    // -> used to pass parameters?
    // to gain access to the content passed between JSX closing and opening tags,
    // React passes these in a special prop: props.children
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>)
};

export default ShopContext;

// import { useState, createContext } from 'react';
//
// const Context = createContext();
//
// export function ContextProvider(props) {
//   const [firstName, setFirstName] = useState('Rick');
//   const [lastName, setLastName] = useState('Astley');
//
//   return (
//     <Context.Provider value={{ firstName, lastName }}>
//       {props.children}
//     </Context.Provider>
//   );
// }
//
// export default Context;