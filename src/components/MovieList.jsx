import { useContext } from "react";
import PropTypes from "prop-types";
// import ImgTemp from '../assets/temp-1.jpeg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from "../context/MovieProvider";

// CAROUSEL SETUP
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const MovieList = ({ title, data }) => {
  const {handleTrailer} = useContext(MovieContext)

  return (
    <div className="bg-black text-white p-10 mb-10">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {data?.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[300px] relative group"
              onClick={() => handleTrailer(item.id)}
            >
              <div
                className="
              group-hover:scale-105
              transition-transform duration-500
              ease-in-out
              w-full h-full cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-md">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>

    </div>
  );
};

MovieList.PropTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieList;
