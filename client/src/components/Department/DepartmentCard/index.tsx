import { useQuery } from '@apollo/client';
import { QUERY_DEPARTMENT } from '../../../utils/queries';
import Item from '../../../interfaces/Item'
import { useMutation } from '@apollo/client';
import { ADD_CARTITEM } from '../../../utils/mutations';
import { useState, SyntheticEvent } from "react";
import "./ProductCard.css";
import auth from '../../../utils/auth';

const ProductList = (DepartmentID: string) => {
    const userID = auth.getProfile().data._id;
    const [itemId, setItemId] = useState<string>("");
    const [cartId, setCartId] = useState<string>("");

    setCartId(userID);

    const { loading, data } = useQuery(QUERY_DEPARTMENT, {
        variables: { DepartmentID: DepartmentID },
    });

    const itemsData = data?.itemsData || [];
    if (loading) {
        return <div>Loading...</div>;
    }

    const [addItem, { error }] = useMutation(ADD_CARTITEM);

    const handleAddToCart = async (event: SyntheticEvent) => {
        event.preventDefault();
        try {
            setItemId(event.currentTarget.id);
            await addItem({
                variables: {
                    cartId, itemId
                }
            });
            alert("Item added to cart!");
        } catch (e) {
            console.error(e);
            alert("Failed to add item to cart.");
        }
    };

    return (
        <>
            {itemsData.items.map((item: Item) => (
                <div className="product-card">
                    <img src={item.itemImg} alt={item.itemName} className="product-card-image" />
                    <div className="product-card-body">
                        <h3 className="product-card-title">{item.itemName}</h3>
                        <p className="product-card-description">{item.description}</p>
                        <p className="product-card-price">${item.price.toFixed(2)}</p>
                        <button className="product-card-button" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductList;
