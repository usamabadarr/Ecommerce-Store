import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_CART } from '../../utils/queries';

import ShoppingCartItem from './ShoppingCartItem'
import CartItem from '../../interfaces/CartItem';

import Auth from '../../utils/auth';

function ShoppingCart() {
    const userID = Auth.getProfile().data._id;

    const { loading, data } = useQuery(QUERY_SINGLE_CART, {
        variables: { cartID: userID },
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1> Subtotal : {data.total} </h1>
            <h2> Items in Cart: </h2>
            <ul>
                {data.addedItems.map((item: CartItem) => (
                    <ShoppingCartItem key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
}

export default ShoppingCart;