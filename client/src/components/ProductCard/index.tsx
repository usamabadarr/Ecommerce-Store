import Item from '../../interfaces/Item';
import { SyntheticEvent } from 'react';
import { ADD_CARTITEM } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const ProductCard = (product: Item) => {
    const { id, itemName, itemImg, price, description } = product;

    const [addItem] = useMutation(ADD_CARTITEM);
    const handleAddToCart = async (event: SyntheticEvent) => {
        event.preventDefault();
        try {
            await addItem({ variables: { id } });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <h2>{itemName}</h2>
            <img src={itemImg} alt={itemName} />
            <p>{description}</p>
            <p>{price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
