import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Shift every 2 seconds

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, [current]); // Only re-run effect if current changes

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-400`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, i) => {
          return (
            <div key={i} className="relative w-full flex-none">
              <img src={s.image} className="w-full" />
              <div className="absolute bottom-10 left-0 transform translate-x-10 translate-y-[-20] w-90 h-85 bg-orange-500 flex items-center justify-center opacity-80 rounded-lg shadow-lg p-5">
                <span className="text-sm font-semibold text-white sm:text-sm dark:text-gray-800 text-center">
                  {s.content}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
