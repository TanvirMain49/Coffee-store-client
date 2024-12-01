import React from 'react';
import bannerImg from '../assets/more/3.png'

const Banner = () => {
    return (
        <div 
            style={{
                backgroundImage:`url(${bannerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className='h-screen w-full'
        
        >
            <div className='flex flex-col items-start justify-center text-white space-y-6 pt-[15%] pl-[46%]'>
                <h1 className='text-6xl'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-base pr-36 font-raleway'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className=" border-2 text-2xl font-extrabold bg-[#D2B48C] text-[#331A15] border-[#331A15] py-2 px-4 rounded-md mt-4 mb-4 hover:bg-yellow-800 font-rancho">Learn More</button>
            </div>   
        </div>
    );
};

export default Banner;