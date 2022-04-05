import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import HomeReview from '../HomeReview/HomeReview';
import './Home.css';

const Home = () => {
    const [reviews, setReveiws] = useReview();
    const homeReveiws = reviews.slice(0, 3);
    
    const navigate = useNavigate();
    return (
        <div>
            <div className='title-container md:flex mx-12 md:mx-32 md:mt-32'>
                
                <img className='mt-12 image' src="https://images-na.ssl-images-amazon.com/images/I/61G0tSHf6PL._AC._SR360,460.jpg" alt="" />
                
              <div className='ml-2 md:ml-16 mt-12'>
                    <h1 className='title'>Your Next Watch</h1>
                    <h1 className='title mb-4'>Your Best Watch</h1>
                    <p className='text-lg md:text-2xl mr-8 md:mr-0 md:ml-36 text-purple-600'>Rolex 126710BKBLSO GMT-Master II Watch</p>
                    
                    <p className='watch-info md:ml-72 mr-8 md:mr-16 mb-8'>Black dial enhanced by luminous silver-tone hands. stainless steel case with a 1 stainless steel rolex oyster band. Automatic movement. 100 meters / 330 feet water resistance. Bi-directional Rotating bezel. Scratch Resistant Sapphire crystal. Solid caseback.</p>

                    <button className='bg-pink-300 p-2 md:p-3 rounded-lg text-md md:text-lg mr-12 md:mr-52'>Live Demo</button>
                </div>

            </div>

            <div>
                    <h1 className='text-3xl md:text-4xl font-semibold mt-24 mb-12'>Customer Review(3)</h1>

                    {
                      homeReveiws.map(review => <HomeReview key={review.id}
                      review={review}
                                ></HomeReview>) 
                    }

                    <button onClick={() => navigate("/reviews")} className='see-all-review-btn'>See All Reviews</button>

                </div>
        </div>
    );
};

export default Home;