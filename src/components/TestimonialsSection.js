import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const testimonialRefs = useRef([]);

  useEffect(() => {
    // Animate section title with 3D effect
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

    // Animate subtitle
    gsap.fromTo(sectionRef.current.querySelector('.text-xl'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate testimonials with enhanced 3D effects
    testimonialRefs.current.forEach((testimonial, index) => {
      gsap.fromTo(testimonial,
        { opacity: 0, y: 60, rotationY: -30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          scale: 1,
          duration: 1,
          delay: 0.4 + (index * 0.2),
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: testimonial,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Add hover effects
      if (testimonial) {
        testimonial.addEventListener('mouseenter', () => {
          gsap.to(testimonial, {
            y: -15,
            rotationY: 2,
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        testimonial.addEventListener('mouseleave', () => {
          gsap.to(testimonial, {
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        });
      }
    });

    // Animate stars with stagger
    testimonialRefs.current.forEach((testimonial, index) => {
      const stars = testimonial.querySelectorAll('.text-yellow-400');
      stars.forEach((star, starIndex) => {
        gsap.fromTo(star,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.6 + (index * 0.2) + (starIndex * 0.1),
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: testimonial,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const testimonials = [
    {
      name: "Emily R",
      country: "USA",
      content: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
      rating: 5,
      avatar: "/r11.png"
    },
    {
      name: "Amit K",
      country: "India",
      content: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online",
      rating: 5,
      avatar: "/r12.png"
    },
    {
      name: "Sophie M",
      country: "UK",
      content: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
      rating: 5,
      avatar: "/r13.png"
    },
    {
      name: "Javier L",
      country:"Spain",
      content: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand",
      rating: 5,
      avatar: "/r14.png"
    },
    {
      name: "Lucas T",
      country:"Brazil",
      content: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
      rating: 5,
      avatar: "/r15.png"
    },
    {
      name: "Nora S",
      country:"Canada",
      content: "I have tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense",
      rating: 5,
      avatar: "/r16.png"
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 bg-gradient-to-br from-indigo-50 to-purple-100"
      style={{
        width: '1920px',
        minHeight: '1163px',
        maxWidth: '100vw',
        maxHeight: '100vh'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={el => testimonialRefs.current[index] = el}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group perspective-1000"
            >
              <div className="transform-style-preserve-3d">
                <div className="mb-6 flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;