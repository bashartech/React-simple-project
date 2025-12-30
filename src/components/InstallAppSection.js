import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef(null);
  const counterRef = useRef([]);

  useEffect(() => {
    // Animate section title
    gsap.fromTo(sectionRef.current.querySelector('h2'),
      { opacity: 0, y: 100, skewY: -5 },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate section subtitle
    gsap.fromTo(sectionRef.current.querySelector('.text-gray-300'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate stats cards with stagger
    const statItems = sectionRef.current.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50, rotationX: -45 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          delay: 0.4 + (index * 0.15),
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Add hover effects
      if (item) {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    // Animate stats counters
    counterRef.current.forEach((counter, index) => {
      const value = parseInt(counter.textContent);

      ScrollTrigger.create({
        trigger: counter,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(counter,
            { innerText: 0, scale: 0.5 },
            {
              innerText: value,
              scale: 1,
              duration: 2.5,
              ease: "elastic.out(1, 0.5)",
              snap: { innerText: 1 },
              onUpdate: function() {
                counter.innerText = Math.ceil(counter.innerText);
              }
            }
          );
        },
        once: true
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const stats = [
    { number: 10000, label: "Happy Clients", suffix: "+" },
    { number: 5000, label: "Projects Completed", suffix: "+" },
    { number: 99.9, label: "Uptime", suffix: "%" },
    { number: 24, label: "Hours Support", suffix: "/7" }
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 bg-gradient-to-br flex justify-center items-center from-gray-900 to-black text-white"
      style={{
        width: '1920px',
        minHeight: '750px',
        maxWidth: '100vw',
        maxHeight: '70vh'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
            How to Install Our App
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
           Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
          </p>
        </div>

        <div className="h-[54px] mb-10 flex justify-center items-center gap-6">
          <div className="text-5xl text-red-400">01</div>
          <div><img src="/Line 36.png" alt="" /></div>
          <div  className="text-5xl text-black">02</div>
         <div><img src="/Line 36.png" alt="" /></div>
          <div  className="text-5xl text-black">03</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex items-center justify-center  space-x-4">
                <div
              className="bg-white p-8 rounded-2xl   shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
             
              <h3 className="text-3xl flex items-center justify-center font-bold text-gray-900 mb-3">
                Download 
              </h3>
              <p className="text-gray-600 flex items-center justify-center leading-relaxed text-2xl">
                                Open Play Store or App Store

              </p>
            </div>
              </div>
          <div className="flex items-center justify-center  space-x-4">
                <div
              className="bg-white p-8 rounded-2xl   shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
             
              <h3 className="text-3xl flex items-center justify-center font-bold text-gray-900 mb-3">
                Install App  
              </h3>
              <p className="text-gray-600 flex items-center justify-center leading-relaxed text-2xl">
                                The app will install automatically.

              </p>
            </div>
              </div>
          <div className="flex items-center justify-center  space-x-4">
                <div
              className="bg-white p-8 rounded-2xl   shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              
              <h3 className="text-3xl flex items-center justify-center font-bold text-gray-900 mb-3">
                Ready to Use
              </h3>
              <p className="text-gray-600 flex items-center justify-center leading-relaxed text-2xl">
                                Sign up or log in to start exploring!

              </p>
            </div>
              </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;