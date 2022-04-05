import React from 'react';
import './Review.css';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Review = ({review}) => {
    const {name, img, comment, ratings} = review;
    return (
        <div className='review-container my-16 mx-8 md:mx-96 py-4'>
        <div className='image-name-div'>
        <img className='review-image' src={img} alt="" />
        <p className=' text-lg md:text-2xl ml-2'>{name}</p>
        </div>
         <p>{comment}</p>
         <p><span className='mr-3'>Ratings:</span>
         <Rating
         initialRating={ratings}
         emptySymbol={<FontAwesomeIcon icon={faStar} />}
         fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
          readonly
         ></Rating></p>
    </div>
    );
};

export default Review;