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

    // Animate checklist items with stagger
    // const checklistItems =
    //   contentRef.current.querySelectorAll(".space-y-6 > div");
    // checklistItems.forEach((item, index) => {
    //   gsap.fromTo(
    //     item,
    //     { opacity: 0, x: -30 },
    //     {
    //       opacity: 1,
    //       x: 0,
    //       duration: 0.6,
    //       delay: 0.6 + index * 0.1,
    //       ease: "power2.out",
    //       scrollTrigger: {
    //         trigger: contentRef.current,
    //         start: "top 80%",
    //         toggleActions: "play none none reverse",
    //       },
    //     }
    //   );
    // });

    // Animate buttons
    // const buttons = contentRef.current.querySelectorAll("button");
    // buttons.forEach((button, index) => {
    //   gsap.fromTo(
    //     button,
    //     { opacity: 0, y: 20 },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       duration: 0.8,
    //       delay: 0.9 + index * 0.2,
    //       ease: "back.out(1.5)",
    //       scrollTrigger: {
    //         trigger: contentRef.current,
    //         start: "top 80%",
    //         toggleActions: "play none none reverse",
    //       },
    //     }
    //   );
    // });

    // Animate floating elements
    // const floatingElements = imageRef.current.querySelectorAll(".absolute");
    // floatingElements.forEach((element, index) => {
    //   gsap.fromTo(
    //     element,
    //     { opacity: 0, scale: 0 },
    //     {
    //       opacity: 1,
    //       scale: 1,
    //       duration: 1,
    //       delay: 1.2 + index * 0.2,
    //       ease: "back.out(1.7)",
    //       scrollTrigger: {
    //         trigger: imageRef.current,
    //         start: "top 80%",
    //         toggleActions: "play none none reverse",
    //       },
    //     }
    //   );
    // });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full  py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
      style={{
        width: "1920px",
        minHeight: "1078px",
        maxWidth: "100vw",
        maxHeight: "100vh",
      }}
    >
      <div className=" h-full flex gap-8 w-full mx-auto px-4">
        <div className="w-1/2 h-full flex justify-center items-end">
        <div>
          <img src="/Group 3.png" alt="" />
        </div>
        </div>
        <div className=" w-1/2 h-full items-center grid grid-cols-1 gap-12 sm:gap-16 ">
          {/* Content Section */}
          <div ref={contentRef} className="space-y-8 lg:w-[762px]">
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl lg:w-[762px] lg:text-7xl font-bold text-gray-900 mb-6"
            >
              Where Every Click Sparks a Connection!
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 lg:w-[762px]">
              A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life!
            </p>

            <div className="space-y-6">
              <div className="flex items-center lg:w-[762px] space-x-4">
                <div
              className="bg-white p-8 rounded-2xl  lg:w-[562px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              {/* <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                
              </div> */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                🎥 Short Videos & Reels
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Share engaging, bite-sized content that keeps everyone entertained.
              </p>
            </div>
              </div>
              <div className="flex items-center w-[562px] space-x-4">
                <div
              className="bg-white lg:w-[562px] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                🔔 Smart Notifications
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Stay updated on what matters without the noise.
              </p>
            </div>
              </div>
              <div className="flex items-center w-[562px] space-x-4">
                <div
              className="bg-white lg:w-[562px] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
       
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                👥 Interest-Based Communities
              </h3>
              <p className="text-gray-600 leading-relaxed">
               Join groups and discussions that match your passion.
              </p>
            </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
