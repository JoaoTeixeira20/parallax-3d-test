import React from 'react';
import SvgLoader from '../svgs/SvgLoader';

const LoaderComponent = () => {
    return(
        <div className='w-full h-full flex justify-center items-center flex-col'>
            <SvgLoader/>
            <p className='text-cyan-900 text-2xl'>loading chunks...</p>
        </div>
    )
}

export default LoaderComponent;