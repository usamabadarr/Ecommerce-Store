import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Item from '../../interfaces/IItem';

const FeaturedItem = ({ item }: { item: Item }) => {
    const { itemImg ,itemName, description,  } = item;

    return (
        <Carousel.Item>
            <Image src={itemImg} />
            <Carousel.Caption>
                <h3>{itemName}</h3>
                <p>{description}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
}

export default FeaturedItem;