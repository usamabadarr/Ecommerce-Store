import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useQuery } from '@apollo/client';
import { QUERY_FEATURED_ITEMS } from '../utils/queries';

import FeaturedItem from '../components/FeaturedItem';
import Department from '../components/Department';
import ShoppingCart from '../components/ShoppingCart';
// import ProductCard from '../components/ProductCard';

import Item from '../interfaces/Item';

const Home = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    const { loading, data } = useQuery(QUERY_FEATURED_ITEMS);
    const featuredItems = data?.featuredItems || [];

    return (
        <>
            <div className="featured-item-container">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {loading ? (
                        <div>Loading...</div>
                    ) :
                        (<>{
                            featuredItems.map((item: Item) => (
                                <FeaturedItem key={item.id} item={item} />
                            ))
                        }</>)
                    }
                </Carousel>
            </div>

            <div className='department-container'>
                <Department />
            </div>

            <Button variant="primary" onClick={handleShow}>
                View Cart
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>ShoppingCart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ShoppingCart />
                </Offcanvas.Body>
            </Offcanvas>



            {/* <div className="product-grid-container">
                <div className="product-grid">
                    <ProductCard
                        id="ricardo"
                        itemName="Electronics"
                        itemImg="https://th.bing.com/th/id/R.47f8f4b66104be2bd013aa4d7a62d3d5?rik=2QtNIhrak5YA8g&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f30000%2fvelka%2fplaying-cards.jpg&ehk=A8bc6f2hT4Js73TFBPsT1oxsB%2bSOzXMeWuVw2MZ7Kl0%3d&risl=&pid=ImgRaw&r=0"
                        department_id={402}
                        price={2000}
                        description="black couch with suede seats"
                    />
                    <ProductCard
                        id="ricardo"
                        itemName="Furniture"
                        itemImg="Black couch"
                        department_id={402}
                        price={2000}
                        description="black couch with suede seats"
                    />
                    <ProductCard
                        id="ricardo"
                        itemName="Clothing"
                        itemImg="Black couch"
                        department_id={402}
                        price={2000}
                        description="black couch with suede seats"
                    />
                    <ProductCard
                        id="ricardo"
                        itemName="Lighting"
                        itemImg="Black couch"
                        department_id={402}
                        price={2000}
                        description="black couch with suede seats"
                    />
                </div>
            </div> */}
        </>
    );
}

export default Home;