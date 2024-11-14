import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { useQuery } from '@apollo/client';
import { QUERY_FEATURED_ITEMS } from '../utils/queries';

import FeaturedItem from '../components/FeaturedItem';
import Department from '../components/Department';

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    const { loading, data } = useQuery(QUERY_FEATURED_ITEMS);
    const FeaturedItem = data?.featuredItems || [];

    return (
        <>
            <div className="FeaturedItem Container">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {loading ? (
                        <div>Loading...</div>
                    ) :
                        {
                            data.featuredItems.map((item) => (
                                <FeaturedItem key={item.id} item={item} />
                            ))
                        }
                    }
                </Carousel>
            </div>

            <div className='Department Container'>
                <Department />
            </div>
        </>
    )
}

export default Home;