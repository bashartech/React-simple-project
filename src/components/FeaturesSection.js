import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate section title with more sophisticated animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 100, rotationX: -90 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate feature cards with stagger and enhanced effects
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50, scale: 0.8, rotationY: -15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          delay: 0.15 * index,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Add hover effects
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: "🔥 ",
      title: "Seamless Connections",
      description: "Stay in touch with friends, family, and like-minded people with just a tap."
    },
    {
      icon: "📸 ",
      title: "Share Your Story",
      description: "Upload photos, videos, and updates to let the world know whats happening in your life."
    },
    {
      icon: "💬",
      title: "Real-Time Chat",
      description: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging."
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "Your data, your control. We prioritize your privacy with world-class security."
    },
    {
      icon: "🌎",
      title: "Discover & Explore",
      description: "Find trending content, join communities, and follow pages that match your interests."
    },
    {
      icon: "💼",
      title: "Grow Your Business",
      description: "Use our platform to market your brand, connect with customers, and build meaningful relationships."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full  pt-10 bg-gray-50"
      style={{
        width: '1920px',
        minHeight:"868px",
        maxWidth: '100vw',
        maxHeight: '868px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
Features That Keep You Hooked! 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
Meet, Chat, Share–Anytime, Anywhere!          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;