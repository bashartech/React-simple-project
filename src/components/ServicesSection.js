import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate section title with more sophisticated animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100, skewX: 10 },
      {
        opacity: 1,
        y: 0,
        skewX: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate content with staggered list items
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate image with 3D effect
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100, rotationY: -15 },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "elastic.out(1, 0.8)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2  flex justify-center items-start lg:items-center">
            <div ref={imageRef} className="w-full max-w-md">
              <img
                src="/Group 3.png"
                alt="Services illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="w-full lg:w-1/2">
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6"
            >
              Where Every Click Sparks a Connection!
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
              A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life!
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  🎥 Short Videos & Reels
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  Share engaging, bite-sized content that keeps everyone entertained.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  🔔 Smart Notifications
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  Stay updated on what matters without the noise.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  👥 Interest-Based Communities
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  Join groups and discussions that match your passion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
