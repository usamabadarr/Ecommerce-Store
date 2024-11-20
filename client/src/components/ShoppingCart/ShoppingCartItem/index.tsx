import CartItem from "../../../interfaces/CartItem"


const ShoppingCartItem = ({ item }: { item: CartItem }) => {
    const { img, itemName, price, quantity } = item;

    return (
        <li>
            <img src={img} alt={itemName} />
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <p>Subtotal: ${price * quantity}</p>
        </li>
    );
}
export default ShoppingCartItem;

