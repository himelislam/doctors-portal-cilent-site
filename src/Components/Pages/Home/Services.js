import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id : 1,
            name : 'Fluoride Treatment',
            description : 'Hello world hello dunia Hello world hello duniaHello world hello duniaHello world hello duniaHello world hello duniaHello world hello duniaHello world hello duniaHello world hello dunia',
            img : fluoride
        },
        {
            _id : 2,
            name : 'Cavity Filling',
            description : 'Hello world hello dunia Hello world hello duniaHello world hello duniaHello world hello duniaHello world hello duniaHello world hello duniaHello world hello duniaHello world hello dunia',
            img : cavity
        },
        {
            _id : 3,
            name : 'Teeth Whitening',
            description : 'Hello world hello dunia Hello world hello duniaHello world hello duniaHello world hello duniaHello world hello duniaHello world hello duniaHello world hello duniaHello world hello dunia',
            img : whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl '>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;