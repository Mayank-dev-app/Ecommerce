import img1 from "../../assets/images/Global/couple.jpg"
import img2 from "../../assets/images/Global/Abc.jpg"
import img3 from "../../assets/images/Global/chairjeans.jpg"
import img4 from "../../assets/images/Global/jeans.jpg"
import img5 from "../../assets/images/Global/jersy.jpg"
import img6 from "../../assets/images/Global/shoes.jpg"
import { useEffect, useState } from "react"
const Hero = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer);
  }, [images.length])

  return (
    <div className="my-20  w-full flex items-center justify-center">
        {/* Left Container */}
      <div className="relative w-[80%] h-[400px]  overflow-hidden  rounded-md shadow-lg">
        {/* Image */}
        <img
          src={images[current]}
          alt={`slide-${current}`}
          className="flex w-full h-full transition-transform duration-700 "
        />

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? "bg-white" : "bg-gray-400"
                }`}
            ></div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Hero