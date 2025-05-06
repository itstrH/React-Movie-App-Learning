import React from 'react';
import PropTypes from 'prop-types';
import ImgTemp from '../assets/temp-1.jpeg'


const MovieList = ({title}) => {
  return (
    <div className='bg-black text-white p-10 mb-10'>
        <h2 className='uppercase text-xl mb-4'>{title}</h2>
        <div className="flex items-center space-x-4">
            <div className="w-[200px] h-[300px] bg-red-500 relative group">
                <div className='
                group-hover:scale-105
                trasition-transform duration-500
                ease-in-out
                w-full h-full cursor-pointer'>
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                <img 
                src={ImgTemp} 
                alt="" 
                className='w-full h-full object-cover'
                />
                <div className="absolute bottom-4 left-2">
                    <p className="uppercase text-md">Nghe Noi Em Thich Toi</p>
                </div>   
                </div>
            </div>
        </div>
    </div>
  )


}

MovieList.PropTypes = {
    title: PropTypes.string,
  }

export default MovieList