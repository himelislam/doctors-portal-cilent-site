import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointmentbg from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background : `url(${appointmentbg})`
        }} className='flex justify-center items-center mt-28'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-6'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make An Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam est reiciendis eveniet? Iure deserunt esse ratione reprehenderit in velit amet assumenda debitis, accusantium quis animi asperiores, enim aut dolore explicabo expedita impedit obcaecati adipisci voluptatibus consequatur? Ratione, consectetur placeat.</p>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;