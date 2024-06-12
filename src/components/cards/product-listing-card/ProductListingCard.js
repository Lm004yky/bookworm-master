// ProductListingCard.js

import React from "react";
import './productListingCard.styles.css';
import { Link } from 'react-router-dom';

const ProductListingCard = ({ bookData }) => {
    // Calculate discounted price
    const discountedPrice = bookData.discount ? 
        bookData.price - (bookData.price * bookData.discount / 100) : 
        bookData.price;

    return (
        <div className="product-listing-card">
            <div className="product-listing-img-container">
                <img src={bookData.book_url} alt="product-listing" className="product-listing-image" />
            </div>
            <div className="product-listing-details-container">
                <h3>{bookData.book_name}</h3>
                <p className="author-name">{bookData.author_name}</p>
                <div className='pricing'>
                    {bookData.discount ? (
                        <>
                            <span className="original-price">&#8376;{bookData.price}</span>
                            <span className="discounted-price">&#8376;{discountedPrice}</span>
                        </>
                    ) : (
                        <span>&#8376;{bookData.price}</span>
                    )}
                </div>
                {bookData.discount && (
                    <p className="discount">{bookData.discount}% Off</p>
                )}
            </div>
            <div className="card-btn-container">
                <Link to={`/book-details/${bookData.id}`} className="product-listing-button">Add To Cart</Link>
            </div>
        </div>
    )
}

export default ProductListingCard;
