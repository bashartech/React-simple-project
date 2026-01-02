import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const DonateSection = () => {
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
      className="w-full lg:px-4 py-8 md:py-12 lg:py-16 relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center bg-[#FF5349] from-orange-500 via-red-500 to-red-600 rounded-3xl justify-center">
        <div className="w-full max-w-7xl mx-auto  sm:p-6">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 lg:gap-0">
            {/* Text content */}
            <div className="w-full lg:ml-5 lg:mb-[87px] lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="space-y-2 w-full max-w-3xl mx-auto ">
                <h1
                  ref={titleRef}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold lg:w-[900px] text-white leading-tight"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-4 sm:pt-6 md:pt-10">Be the Reason Someone Smiles Today!</p>
                </h1>
                <p
                  ref={subtitleRef}
                  className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  Your generosity can change lives. Every donation brings hope, support, and a brighter future. Give today and make a difference!
                </p>
                <div
                  ref={buttonRef}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4"
                >
                  <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-base sm:text-lg">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>

            {/* Image content */}
            <div className="w-full flex lg:h-[500px] lg:w-1/2 justify-center items-end sm:mb-[-25px] md:mb-[-25px] lg:mb-[-25px] lg:mt-0">
              <div className="relative w-full lg:mr-36 lg:w-[530px]  max-w-md">
                <div className="flex flex-col lg:w-[680px] sm:flex-row justify-cente lg:mr-10 items-center gap-4 sm:gap-6">
                  <div className="w-full hidden sm:flex max-w-xs">
                    <img
                      ref={imageRef}
                      src="/mb2.PNG"
                      alt="Donation illustration"
                      className="w-full  pt-[170px] lg:pt-[170px] h-auto object-contain"
                    />
                  </div>
                 
                  <div className="w-full hidden sm:flex sm:mt-[54px] lg:mt-[0px] lg:w-[790px] max-w-xs">
                    <img
                      src="/mb1.PNG"
                      alt="Donation illustration"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className='flex flex-col sm:hidden'>
                     <div className=' sm:hidden'>

                    <img src="/iPhone 14 Pro (5).png" alt="" />
                  </div>
                  <div>
                    <img src="/iPhone 14 Pro (3).png" alt="" />
                  </div>
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

export default DonateSection;