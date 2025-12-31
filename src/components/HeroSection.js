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
      className="w-full bg-[#FF5349] px-4 py-8 md:py-12 lg:py-20 relative overflow-hidden"
    >
      {/* Logo section */}
      <div className="w-full mb-6 flex justify-center items-center">
        <img
          src="/Group 12.png"
          alt="Logo"
          className="max-w-full h-auto"
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          {/* Text content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="space-y-6 w-full max-w-3xl mx-auto">
              <h1
                ref={titleRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins text-white leading-tight"
              >
                <p className="font-poppins mb-2 sm:mb-3 md:mb-4 h-9 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Stay Connected</p>
                <p className="font-poppins h-9 mb-2 sm:mb-3 md:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Stay Social</p>
                <p className="font-poppins h-9 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Stay You!</p>
              </h1>
              <p
                ref={subtitleRef}
                className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you  MyBindle is your home on the internet.
              </p>
              <div
                ref={buttonRef}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6"
              >
                <button className="px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-100 text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Image content */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="w-full h-auto">
                <img
                  ref={imageRef}
                  src="/r25.PNG"
                  alt="Hero section placeholder"
                  className="w-full h-auto object-contain rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;