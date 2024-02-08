import { useState, useEffect } from "react";
import image01 from "../assets/image-01.jpg";
import image02 from "../assets/image-02.jpg";
import image03 from "../assets/image-03.jpg";
import image04 from "../assets/image-04.jpg";
import image05 from "../assets/image-05.jpg";
import logo from "../assets/logo.png";

const images = [image01, image02, image03, image04, image05];

export default function Homepage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current image index
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 8000ms

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <>
      <div className="flex flex-col text-stone-900 ml-20 mt-40 mb-auto text-center" style={{ width: '400px' }}>
        <img
          src={logo}
          alt="logo"
          className="w-16 h-16 object-contain mx-auto"
        />
        <div style={{ width: '400px' }}>
          <h2 className="text-2xl font-bold uppercase my-10">React Projects Manager</h2>
          <p className="mb-10 text-base">You have no projects open.</p>
          <p className="mb-10 text-base">Select a project or create a new one.</p>
        </div>
        </div>
      <img
        src={images[currentImage]}
        alt="wallpaper"
        className="mt-20 mb-auto border-2 border-stone-400"
        />
    </>
  );
}
