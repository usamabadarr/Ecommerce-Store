import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const FeaturedItem = ({ item }) => {
    const { title, description, image } = item;

    return (
        <Carousel.Item>
            <Image src="" />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
}