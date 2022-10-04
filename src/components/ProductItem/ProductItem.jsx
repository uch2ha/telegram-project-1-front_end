import React from 'react';
import Button from '../Button/Button';
import './Productitem.css';

const ProductItem = ({ product, className, onAdd }) => {
    const onAddHandler = () => {
        onAddHandler(product);
    };
    return (
        <div className={'product ' + className}>
            <div className='img' />
            <div className='title'>{ProductItem.title}</div>
            <div className='description'>{ProductItem.description}</div>
            <div className='price'>
                <span>
                    Price: <b>{ProductItem.price}</b>
                </span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Add to basket
            </Button>
        </div>
    );
};

export default ProductItem;
