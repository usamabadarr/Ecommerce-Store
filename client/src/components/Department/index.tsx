// import { Link } from 'react-router-dom';
// import { type MouseEvent} from 'react';
// import Auth from '../../utils/auth';

import { useEffect, useState } from 'react';

import ProductCard from '../ProductCard'
import FeaturedItem from '../FeaturedItem';


const Department: React.FC = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(json => {
                setProduct(json)
            })
    }, []);

    return (
        <section className="w-100 mt-auto text-dark p-4">
            <div className="container text-center mb-5">
                <h2>Department</h2>
                <div className="row">
                    {product.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};
