import React from 'react';
import check from "../assets/check.png";


const   Dashboard=() => {
  return (
    
    <div className='border-2 rounded-lg w-auto md:w-96 h-13 p-15 mr-12 mx-20 my-20 flex items-center justify-center '>
        <div className='flex flex-col items-center justify-center  h-5 p-12 '>
        <img src={check} className='w-14 h-15' ></img>
        <p className='my-2'>The Patient Name is Successfully registered</p>
        <button className='bg-red-600 w-20 h-9 border-2 items-center justify-center mx-2 my-4 '> ok</button>
        </div>

    </div>
   
  );
};

export default Dashboard;