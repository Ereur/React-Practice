import React from 'react';
import './Product.css';
import StarIcon from '@mui/icons-material/Star';

function Product() {
    return (
        <div className='product'>
            <div className='product__info'>
                <p> The lean startup</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className='product__rating'>
                    <StarIcon/>
                </div>
            </div>
            <img
            src='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
            alt='product'
            />
            <button>Add to basket</button>
        </div>
    );
}

export default Product;
