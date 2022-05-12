import React from 'react';
import bg from '../../../assets/images/bg.png'
const ContactUs = () => {
    return (
        <section style={{
            background : `url(${bg})`,
            backgroundSize : 'cover' 
        }}>
            <form>
            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
            </form>
        </section>
    );
};

export default ContactUs;