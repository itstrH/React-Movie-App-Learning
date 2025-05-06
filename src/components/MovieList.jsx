import React from 'react';
import PropTypes from 'prop-types';

const MovieList = ({title}) => {
  return (
    <div className='bg-black text-white p-10 mb-10'>
        <h2 className='uppercase text-xl mb-4'>{title}</h2>
        <div className="flex items-center space-x-4">
            <div className="w-[200px] h-[300px] bg-red-500">

            </div>
        </div>
    </div>
  )


}

MovieList.PropTypes = {
    title: PropTypes.string,
  }

export default MovieList