import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);

  return (
    <section className="w-full min-h-screen bg-black relative flex flex-col justify-between">
      <div className="h-full w-full flex justify-center items-center flex-col pt-20 md:pt-24 lg:pt-28">
        <p id="hero" className="hero-title opacity-0 mb-6 md:mb-8 lg:mb-10 text-4xl md:text-5xl lg:text-6xl font-bold">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12 my-4 md:my-6 lg:my-8">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none w-full"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 pb-12 md:pb-16 lg:pb-20 mb-8 md:mb-0 "
      >
        <a
          href="#highlights"
          className="btn bg-white text-black py-3 px-6 rounded-full font-medium text-lg mb-4 hover:bg-opacity-90 transition-all"
        >
          Buy
        </a>
        <p className="font-normal text-lg md:text-xl text-gray-300">
          From $199/month or $999
        </p>
      </div>
    </section>
  );
};

export default Hero;