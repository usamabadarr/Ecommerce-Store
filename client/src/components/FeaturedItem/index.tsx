import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

interface Item {
    title: string;
    description: string;
    image: string;
}

const FeaturedItem = ({ item }: { item: Item }) => {
    const { title, description, image } = item;

    return (
        <Carousel.Item>
            <Image src={image} />
            <Carousel.Caption>
                <h3>{title}</h3>
                <p>{description}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
}

export default FeaturedItem;