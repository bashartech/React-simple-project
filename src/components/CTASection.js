import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
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
      className="w-full min-h-screen h-[1163px]   px-4 py-20 relative overflow-hidden"
      style={{
        width: '1920px',
        minHeight: '563px',
        maxWidth: '100vw',
        maxHeight: '800px'
      }}
    >

<div className="flex items-center  bg-red-500 from-orange-500 via-red-500 to-red-600 lg:h-[850px] rounded-lg justify-center">
      <div className="w-full h-full p-5">
        <div className="w-full h-full flex justify-center items-start ">
          <div className="w-1/2 h-full">
          <div className=" flex justify-center items-center">

           <div className="text-center lg:text-left space-y-4">
            <div className="space-y-0 w-[951px] flex justify-center items-center">
              <div>
              <h1
                ref={titleRef}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >

                <p className=" lg:text-8xl pt-10 m-10">Join the Fun – Download MyBindle Now!</p>
                
                
              </h1>
              <p
                ref={subtitleRef}
                className="text-xl pl-10 md:text-2xl text-white leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
               Your Social Network, Your Way
Download MyBindle Now and Be a Part of a Community Thats Always Evolving!
              </p>
            <div
              ref={buttonRef}
              className="flex flex-col pl-10 sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="px-8 py-4  bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex gap-3 hover:shadow-xl">
                <div className="flex justify-center items-center">
                <div>
                  <img src="/Vector.png" alt="" />
                </div>
                </div>
                <div className="">
                <div className="text-sm">
                  DOWNLOAD ON THE
                </div>

                <div className="text-2xl">
                  App Store
                </div>
                </div>
              </button>
              <button className="px-8 py-4  bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex gap-3 hover:shadow-xl">
                <div className=" flex justify-center items-center">
                <div>
                  <img src="/google-play 1.png" alt="" />
                </div>
                </div>
                <div className="">
                <div>
                  GET IT ON
                </div>

                <div  className="text-2xl">
                  Google Play
                </div>
                </div>
              </button>
             
            </div>
            </div>

              </div>

          </div>

          </div>
          </div>
          <div className="w-1/2 h-full flex justify-center items-end">
          <div className="relative flex">
            <div className="flex justify-end items-end">
              <div className="w-[453px]  flex justify-end items-end h-[450px]">
                <img
                  src="/Stroke Body (3).png"
                  alt="Hero section placeholder"
                  className="w-full h-full "
                />
              </div>
            </div>
              <div className="w-[420px] h-[750px]">
                <img
                  src="/Stroke Body (2).png"
                  alt="Hero section placeholder"
                  className="w-full h-full  "
                />
              </div>

        
            </div>
          
          </div>

        </div>
      </div>

</div>

      
    </section>
  );
};

export default HeroSection;