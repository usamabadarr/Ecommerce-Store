import { useQuery } from '@apollo/client';
import { QUERY_DEPARTMENT } from '../../../utils/queries';
import Item from '../../../interfaces/Item'
import { useMutation } from '@apollo/client';
import { ADD_CARTITEM } from '../../../utils/mutations';
import { useState, SyntheticEvent } from "react";
import "./ProductCard.css";
import auth from '../../../utils/auth';

interface ProductListProps {

    departmentId: string;

}

const ProductList = ({ departmentId }: ProductListProps) => {
    const userID = auth.getProfile().data._id;
    const [itemId, setItemId] = useState<string>("");
    const [cartId, setCartId] = useState<string>("");

    setCartId(userID);

    const { loading, data } = useQuery(QUERY_DEPARTMENT, {
        variables: { DepartmentID: departmentId },
    });

    const [addItem] = useMutation(ADD_CARTITEM);

    if (loading) {
        return <div>Loading...</div>;
    }

    const itemsData = data?.itemsData || [];

    const handleAddToCart = async (event: SyntheticEvent) => {
        event.preventDefault();
        try {
            setItemId(event.currentTarget.id);
            await addItem({
                variables: {
                    cartId, itemId
                }
            });
            console.log("Item added to cart successfully");
        } catch (err) {
            console.error(err);
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
