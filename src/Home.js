import React from 'react';
import './Home.css'
import Product from './Product'

function home() {
  return (
    <div className='home__countainer'>
        <div className='home__banner'>
            <img className='banner' src='https://m.media-amazon.com/images/I/716uwHcOuPL._SX3000_.jpg'/>
            <div className='home__row'>
                <Product/>
            </div>
            <div className='home__row'>
                
            </div>
            <div className='home__row'>
                
            </div>
        </div>
    </div>

    );
}

export default home;
