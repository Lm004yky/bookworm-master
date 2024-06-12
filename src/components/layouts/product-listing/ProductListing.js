import React, { useState, useEffect } from 'react';
import './productListing.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from '../../../util/BookData';

const ProductListing = () => {
    const [discountTimer, setDiscountTimer] = useState(null);

    // Function to calculate time left until discount ends
    const calculateTimeLeft = () => {
        const endDate = new Date('2024-05-1'); // Change this to your desired end date
        const difference = endDate - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDiscountTimer(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    // Format the time left for display
    const formatTimeLeft = () => {
        const timeLeft = discountTimer;
        return `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;
    };

    return(
        <div className="product-listing-container">
            <div className="container">
                <h2>Here are some <span className="text-primary">books</span> that you might like</h2>

                <div className="listing-container">
                    {BookData.slice(0, 4).map((book) => (
                        <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

                {discountTimer && (
                    <div className="discount-timer">
                        Discount ends in: {formatTimeLeft()}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductListing;
