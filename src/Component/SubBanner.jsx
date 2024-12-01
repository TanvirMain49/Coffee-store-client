import React from 'react';
import icon1 from '../assets/icons/1.png'
import icon2 from '../assets/icons/2.png'
import icon3 from '../assets/icons/3.png'
import icon4 from '../assets/icons/4.png'

const SubBanner = () => {
    return (
        <div 
            className='w-full mb-20 bg-[#ECEAE3]'
        >
            <div className='w-11/12 ml-24 flex items-center gap-2 p-6'>
               <div className='space-y-3'>
                    <img src={icon1} alt="" />
                    <div>
                        <h1 className='text-3xl'>Awesome Aroma</h1>
                        <p className='font-raleway pr-16'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
               </div>
               <div className='space-y-3'>
                    <img src={icon2} alt="" />
                    <div>
                        <h1 className='text-2xl'>Awesome Aroma</h1>
                        <p className='font-raleway pr-16'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
               </div>
               <div className='space-y-3'>
                    <img src={icon3} alt="" />
                    <div >
                        <h1 className='text-2xl'>Awesome Aroma</h1>
                        <p className='font-raleway pr-16'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
               </div>
               <div className='space-y-3'>
                    <img src={icon4} alt="" />
                    <div >
                        <h1 className='text-2xl'>Awesome Aroma</h1>
                        <p className='font-raleway pr-10'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
               </div>

            </div>
        </div>
    );
};

export default SubBanner;