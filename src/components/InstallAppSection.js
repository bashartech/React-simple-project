import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InstallSection = () => {
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
      className="w-full py-12 md:py-16 lg:py-2 bg-gradient-to-br from-gray-900 to-black text-white flex justify-center items-center"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-black">
            How to Install Our App
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto">
            Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div className="text-2xl sm:text-3xl md:text-4xl text-red-400 font-bold">01</div>
          <div className="hidden sm:block"><img src="/Line 36.png" alt="" className="h-1 w-72" /></div>
          <div className="text-2xl sm:text-3xl md:text-4xl text-black font-bold">02</div>
          <div className="hidden sm:block"><img src="/Line 36.png" alt="" className="h-1 w-72" /></div>
          <div className="text-2xl sm:text-3xl md:text-4xl text-black font-bold">03</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="flex items-center justify-center">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group w-full max-w-sm">
              <h3 className="text-xl sm:text-2xl md:text-3xl flex items-center justify-center font-bold text-gray-900 mb-3 sm:mb-4">
                Download
              </h3>
              <p className="text-gray-600 flex items-center justify-center leading-relaxed text-base sm:text-lg md:text-xl text-center">
                Open Play Store or App Store
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group w-full max-w-sm">
              <h3 className="text-xl sm:text-2xl md:text-3xl flex items-center justify-center font-bold text-gray-900 mb-3 sm:mb-4">
                Install App
              </h3>
              <p className="text-gray-600 flex items-center justify-center leading-relaxed text-base sm:text-lg md:text-xl text-center">
                The app will install automatically.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group w-full max-w-sm">
              <h3 className="text-xl sm:text-2xl md:text-3xl flex items-center justify-center font-bold text-gray-900 mb-3 sm:mb-4">
                Ready to Use
              </h3>
              <p className="text-gray-600 flex items-center justify-center leading-relaxed text-base sm:text-lg md:text-xl text-center">
                Sign up or log in to start exploring!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InstallSection;