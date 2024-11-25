import CartItem from "../../../interfaces/CartItem"
import React, { useState } from "react";

interface ShoppingCartItemProps {
    item: CartItem;
    authId: string;
    onQuantityChange: (authId: string, itemId: string, quantity: number) => void;
}

const ShoppingCartItem = ({ item, authId, onQuantityChange }: ShoppingCartItemProps) => {
    const { id, img, itemName, price } = item;
    const [quantity, setQuantity] = useState(item.quantity);

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onQuantityChange(authId, id, newQuantity);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(authId, id, newQuantity);
        }
    };

    return (
        <li>
            <img src={img} alt={itemName} />
            <h3>{itemName}</h3>
            <p>Price: ${price}</p>
            <div>
            <button onClick={handleDecrement}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
            {/* <p>Quantity: {quantity}</p> */}
            <p>Subtotal: ${price * quantity}</p>
        </li>
    );
}
export default ShoppingCartItem;
