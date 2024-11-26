import CartItem from "../../../interfaces/CartItem";
import { useState } from "react";
import auth from "../../../utils/auth";
import { useMutation } from "@apollo/client";
import { gql } from "graphql-tag";


const UPDATE_CART_ITEM = gql`
  mutation UpdateCartItem($authId: String!, $itemId: String!, $quantity: Int!) {
    updateCartItem(authId: $authId, itemId: $itemId, quantity: $quantity) {
      id
      quantity
    }
  }`;

const ShoppingCartItem = ({ item }: { item: CartItem }) => {
    const { id, img, itemName, price } = item;
    const [quantity, setQuantity] = useState(item.quantity);
    const authId = auth.getProfile().data._id;

    // Mutation hook
    const [updateCartItem] = useMutation(UPDATE_CART_ITEM);

    // Handling quantity change
    const handleQuantityChange = async (newQuantity: number) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
            try {
                // Performing mutation
                await updateCartItem({
                    variables: {
                        authId,
                        itemId: id,
                        quantity: newQuantity,
                    },
                });
            } catch (error) {
                console.error("Error updating cart item:", error);
            }
        }
    };

    return (
        <li>
            <img src={img} alt={itemName} />
            <h3>{itemName}</h3>
            <p>Price: ${price}</p>
            <div>
                <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
            </div>
            <p>Subtotal: ${price * quantity}</p>
        </li>
    );
};

export default ShoppingCartItem;

