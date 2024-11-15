import { useQuery } from '@apollo/client';
import ProductCard from '../../ProductCard';
import Item from '../../../interfaces/Item';

import { QUERY_DEPARTMENT } from '../../../utils/queries';

const ProductList = (DepartmentID: string) => {
    const { loading, data } = useQuery(QUERY_DEPARTMENT, {
        variables: { departmentId: DepartmentID }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="row">
            {data.products.map((product: Item) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        
    );

};

export default ProductList;