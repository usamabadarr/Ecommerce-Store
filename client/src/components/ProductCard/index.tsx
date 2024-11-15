import Item from '../../interfaces/Item';
import { SyntheticEvent } from 'react';
import { ADD_CARTITEM } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const ProductCard = (product: Item) => {
    const { id, itemName, itemImg, price, description } = product;

    const [addItem, { error, data }] = useMutation(ADD_CARTITEM);
    const handleAddToCart = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            const subtotal = price;
            const { data } = await addItem({
                variables: { input: { id, itemImg, price, subtotal} },
            });


        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-5">
            <div className="card">
                <img src={itemImg} alt={itemName} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{itemName}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                </div>
                <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;