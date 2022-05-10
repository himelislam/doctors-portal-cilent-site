import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id : 1,
            name : 'Winson Herry',
            reviews : 'hello world hello world hello world hello world hello world hello worldhello world',
            img : people1,
            location : 'California'
        },
        {
            _id : 2,
            name : 'Winson Herry',
            reviews : 'hello world hello world hello world hello world hello world hello worldhello world',
            img : people2,
            location : 'California'
        },
        {
            _id : 3,
            name : 'Winson Herry',
            reviews : 'hello world hello world hello world hello world hello world hello worldhello world',
            img : people3,
            location : 'California'
        }
    ]
    return (
        <section className='my-28'>
        <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What our Patients say</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;