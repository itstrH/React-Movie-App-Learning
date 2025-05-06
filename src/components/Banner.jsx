import React from 'react'
import IconRating from '../assets/rating.png'
import IconRatingHalf from '../assets/rating-half.png'
import ImgTemp from '../assets/temp-1.jpeg'
import IconPlay from '../assets/play-button.png'

const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-banner bg-cover bg-center bg-no-repeat
    relative"
    style={{ backgroundImage: "url('/banner.png')" }}>
      <div className='absolute w-full h-full top-0 left-0
       bg-black opacity-40'/>
       <div className='w-full h-full flex items-center justify-center
       space-x-[30px] p-4 relative z-20'>
        <div className='flex flex-col space-y-5 items-baseline w-[50%]'> 
          {/* items-baseline: can chinh theo chinh phan tu do chu khong theo phan tu khac*/}
          <p className='text-white bg-gradient-to-r
          from-red-600 to-red-300 py-2 px-3  
          text-md'>
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px] font-bold">
              Nghe noi em thich toi
            </h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} className='w-8 h-8' alt="" />
              <img src={IconRating} className='w-8 h-8' alt="" />
              <img src={IconRating} className='w-8 h-8' alt="" />
              <img src={IconRating} className='w-8 h-8' alt="" />
              <img src={IconRatingHalf} className='w-8 h-8' alt="" />
            </div>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="flex items-center space-x-4">
              <button className='p-3 text-white bg-black font-bold
              text-md'>
                Chi tiet
              </button>
              <button className='p-3 text-white bg-red-600 font-bold
              text-md'>
                Xem phim
              </button>
            </div>
          </div>
        </div>
        <div className='w-[50%] flex items-center justify-center'>
          <div className="w-[300px] h-[400px] relative
          group">
            <img 
            src={ImgTemp}
            alt="" 
            className='w-full h-full object-cover'/>
            <div className="w-full h-full absolute top-0 left-0 flex
            items-center justify-center backdrop-blur-sm
            opacity-0 group-hover:opacity-100 transition-opacity duration-500
            ease-in-out cursor-pointer">
              <img 
              src={IconPlay}
              alt="play" 
              className='w-16 h-16 relative z-20'
              />
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Banner