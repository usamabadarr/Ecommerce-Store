import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useQuery } from '@apollo/client';
import { QUERY_FEATURED_ITEMS } from '../utils/queries';

import FeaturedItem from '../components/FeaturedItem';
import Department from '../components/Department';
import ShoppingCart from '../components/ShoppingCart';

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
                    <ShoppingCart cartID="someValue" />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Home;