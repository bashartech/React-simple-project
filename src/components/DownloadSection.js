import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const DownloadSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    // Animation for hero section elements
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 100, skewY: 5 },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(subtitleRef.current,
      { opacity: 0, y: 50, x: -30 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(buttonRef.current,
      { opacity: 0, y: 30, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(imageRef.current,
      { opacity: 0, x: 200, rotation: 10 },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1.5,
        delay: 0.4,
        ease: "elastic.out(1, 0.8)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate floating elements
    floatingElementsRef.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          rotation: 360,
          duration: 20,
          ease: "none",
          repeat: -1,
          transformOrigin: "center",
          scrollTrigger: {
            trigger: heroRef.current,
            scrub: true
          }
        });
      }
    });

    // Background elements animation
    gsap.fromTo(
      heroRef.current.querySelectorAll('.bg-element'),
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Scroll indicator animation
    const scrollIndicator = heroRef.current.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      gsap.fromTo(
        scrollIndicator,
        { y: 0 },
        {
          y: 10,
          duration: 1,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut"
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-full lg:px-4 relative overflow-hidden"
    >

      <div className="flex flex-col lg:flex-row items-center bg-red-500 from-orange-500 via-red-500 to-red-600 rounded-lg justify-center">
        <div className="w-full max-w-7xl  p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="space-y-6 w-full max-w-3xl ">
              <h1
                ref={titleRef}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-4 sm:pt-6 md:pt-10">Join the Fun – Download MyBindle Now!</p>
              </h1>
              <p
                ref={subtitleRef}
                className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-4"
              >
                Your Social Network, Your Way
                Download MyBindle Now and Be a Part of a Community Thats Always Evolving!
              </p>
              <div
                ref={buttonRef}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6"
              >
                <button className="px-4 sm:px-6 py-3 sm:py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex gap-2 sm:gap-3 items-center hover:shadow-xl min-w-[200px]">
                  <div className="flex justify-center items-center">
                    <div>
                      <img src="/Vector.png" alt="App Store" className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm">
                      DOWNLOAD ON THE
                    </div>
                    <div className="text-lg sm:text-xl font-bold">
                      App Store
                    </div>
                  </div>
                </button>
                <button className="px-4 sm:px-6 py-3 sm:py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex gap-2 sm:gap-3 items-center hover:shadow-xl min-w-[200px]">
                  <div className="flex justify-center items-center">
                    <div>
                      <img src="/google-play 1.png" alt="Google Play" className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm">
                      GET IT ON
                    </div>
                    <div className="text-lg sm:text-xl font-bold">
                      Google Play
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Image content */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-md">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                <div className="w-full pt-40  max-w-xs">
                  <img
                    ref={imageRef}
                    src="/f2.jpg"
                    alt="Download illustration"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="w-full max-w-xs">
                  <img
                    src="/f3.jpg"
                    alt="Download illustration"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
  );
};

export default DownloadSection;