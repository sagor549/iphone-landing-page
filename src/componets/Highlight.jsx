import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlight = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  });

  return (
    <section
      id="hightlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc-950"
    >
      <div className="screen-max-width">
        {/* Header section with significantly increased bottom margin */}
        <div className="mb-20 w-full items-end justify-between md:flex gap-2">
          <h1
            id="title"
            className="section-heading mb-15 md:mb-15 "
          >
            Get the highlights
          </h1>
          <div className="flex flex-wrap items-end gap-8 md:gap-10 mb-22 relative top-2.5">
            <p className="link flex items-center gap-3">
              Watch the film
              <img 
                src={watchImg} 
                alt="watch"
              />
            </p>
            <p className="link flex items-center gap-3">
              Watch the event
              <img 
                src={rightImg} 
                alt="right"
              />
            </p>
          </div>
        </div>
        
        {/* Adding a spacer div for extra vertical space */}
        <div className="h-16 md:h-24"></div>
        
        {/* VideoCarousel with extra margin */}
        <div className="mt-10 md:mt-20 lg:mt-25">
          <VideoCarousel />
        </div>
        
        {/* Adding another spacer for the playbar separation */}
       
      </div>
    </section>
  );
};

export default Highlight;