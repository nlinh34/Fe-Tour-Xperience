
import React, { useEffect, useRef } from 'react';
import { capy2, capy1, capy3,chup, hehe, logo, sky, sleep, tongtong, travel1, travel2, cl1, cl2, cl3, cl4, cl5, gau, gau2, gau3, gau4, gau5, gau6,gau7, logow } from '../../assets/about/index';

const Counter: React.FC<{ end: number, duration: number }> = ({ end, duration }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const currentRef = ref.current;  // Lưu giá trị ref.current vào biến cục bộ
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 100);
          const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(interval);
              setCount(end);
            } else {
              setCount(Math.ceil(start));
            }
          }, 100);
        }
      },
      { threshold: 1.0 }
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration]);
  
  return <h2 ref={ref} className="text-4xl font-bold text-teal-500">{count}</h2>;
  
};

const AboutPage: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector('.parallax') as HTMLElement;
      if (parallax) {
        const scrollPosition = window.pageYOffset;
        parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const testimonials = [
    {
      name: "chigüire",
      position: "Supervisor",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum a simple Lorem Ipsum has been the industry's standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.",
      image: capy1
    },
    {
      name: "Hydrochoerus ",
      position: "Manager",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting.",
      image: capy2
    },
    {
      name: "hydrochaeris",
      position: "Developer",
      text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.",
      image: capy3
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const handleNext = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  const logos = [
    { src: cl5, alt: "AudioJungle Logo" },
    { src: cl2, alt: "ThemeForest Logo" },
    { src: cl3, alt: "EnvatoMarket Logo" },
    { src: cl4, alt: "CodeCanyon Logo" },
    { src: cl5, alt: "AudioJungle Logo" },
    { src: cl3, alt: "EnvatoMarket Logo" },
    { src: cl2, alt: "ThemeForest Logo" },
    { src: cl1, alt: "Envato Logo" }
  ];

  const images = [
    { src: gau, alt: "Person sitting on a mountain with a scenic background" },
    { src: gau2 , alt: "Person in a hotel room with a bed" },
    { src: gau3 , alt: "Outdoor cafe with tables and chairs" },
    { src: gau4 , alt: "Modern hotel room with a bed" },
    { src: gau5 , alt: "People jumping on a beach" },
    { src: gau6, alt: "Plate of salad with cutlery" },
    { src: gau7 , alt: "Couple sitting on a boat with a scenic background" }
  ];

  return (
    <div>
      <header className="bg-teal-500 text-white py-2 animate-fadeIn">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2">
              
              <span>Thursday, Mar 26, 2021</span>
            </span>
            <span className="flex items-center space-x-2">
              
              <span>Hollywood, America</span>
            </span>
            <span className="flex items-center space-x-2">
              
              <span>Mon-Fri: 10 AM - 5 PM</span>
            </span>
          </div>
          <div className="flex space-x-4">

          </div>
        </div>
      </header>
      <nav className="bg-white shadow-md animate-slideIn">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" />
          </div>
          <ul className="flex space-x-6">
            <li className="hover:text-teal-500"><a href="/">Home</a></li>
            <li className="hover:text-teal-500"><a href="/about">About Us</a></li>
            <li className="hover:text-teal-500"><a href="/destinations">Destinations</a></li>
            <li className="hover:text-teal-500"><a href="/tours">Tours</a></li>
            <li className="hover:text-teal-500"><a href="/pages">Pages</a></li>
            <li className="hover:text-teal-500"><a href="/blog">Blog</a></li>
          </ul>
          <div className="flex space-x-4 items-center">
           
            <button className="text-teal-500 transform transition-transform duration-200 active:scale-95">Login/Register</button>
            <button className="bg-teal-500 text-white px-4 py-2 rounded transform transition-transform duration-200 active:scale-95">Book Now</button>
          </div>
        </div>
      </nav>

      <section className="relative bg-cover bg-center h-96"   style={{ backgroundImage: `url(${sky})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold">ABOUT US</h1>
          <p className="mt-4">
            <span className="text-teal-500">Home</span> | About Us
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto flex px-4">
          <div className="w-1/2 pr-10 animate-slideIn">
            <h2 className="text-teal-500 text-xl">Get To Know Us</h2>
            <h1 className="text-4xl font-bold mt-4">Explore All Tour Of The World With Us.</h1>
            <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="mt-6 flex space-x-4">
              <span className="flex items-center space-x-2 transform transition-transform duration-200 active:scale-95 hover:text-teal-500">
               
                <span>Tour Guide</span>
              </span>
              <span className="flex items-center space-x-2 transform transition-transform duration-200 active:scale-95 hover:text-teal-500">
                
                <span>Friendly Price</span>
              </span>
              <span className="flex items-center space-x-2 transform transition-transform duration-200 active:scale-95 hover:text-teal-500">
                
                <span>Reliable Tour Package</span>
              </span>
            </div>
          </div>
          <div className="w-1/2 relative animate-zoomIn">
            <div className="absolute inset-0 flex items-center justify-center">
            <img src={travel1} alt="Travel 1" className="w-80 h-80"/>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-10 animate-fadeIn">
        <div className="container mx-auto flex justify-around text-center px-4">
          <div className="transform transition-transform duration-200 active:scale-95 hover:text-teal-500">
            <Counter end={11} duration={2000} />
            <p className="mt-2 text-gray-600">Years Experiences</p>
          </div>
          <div className="transform transition-transform duration-200 active:scale-95 hover:text-teal-500">
            <Counter end={291} duration={2000} />
            <p className="mt-2 text-gray-600">Tour Packages</p>
          </div>
          <div className="transform transition-transform duration-200 active:scale-95 hover:text-teal-500">
            <Counter end={467} duration={2000} />
            <p className="mt-2 text-gray-600">Happy Customers</p>
          </div>
          <div className="transform transition-transform duration-200 active:scale-95 hover:text-teal-500">
            <Counter end={176} duration={2000} />
            <p className="mt-2 text-gray-600">Award Winning</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Find <span className="text-teal-600">Travel Perfection</span></h2>
        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <div className="grid grid-cols-4 gap-8">
          <div className="bg-white shadow-lg p-6 rounded transform transition-transform duration-300 hover:translate-y-[-10px] hover:bg-teal-500 hover:text-white">
           
            <h3 className="text-xl font-bold mb-2">Tell Us What You Want To Do</h3>
            <p className="text-gray-600 mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
            <p className="text-teal-600">100+ Reviews</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded transform transition-transform duration-300 hover:translate-y-[-10px] hover:bg-teal-500 hover:text-white">
          
            <h3 className="text-xl font-bold mb-2">Share Your Travel Locations</h3>
            <p className="text-gray-600 mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
            <p className="text-teal-600">100+ Reviews</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded transform transition-transform duration-300 hover:translate-y-[-10px] hover:bg-teal-500 hover:text-white">
            
            <h3 className="text-xl font-bold mb-2">Share Your Travel Preference</h3>
            <p className="text-gray-600 mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
            <p className="text-teal-600">100+ Reviews</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded transform transition-transform duration-300 hover:translate-y-[-10px] hover:bg-teal-500 hover:text-white">
           
            <h3 className="text-xl font-bold mb-2">Here 100% Trusted Tour Agency</h3>
            <p className="text-gray-600 mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
            <p className="text-teal-600">100+ Reviews</p>
          </div>
        </div>
      </section>

      <section className="text-center py-10">
        <h2 className="text-yellow-500 text-lg">Tour Guides</h2>
        <h1 className="text-4xl font-bold mt-2">
          Meet Our <span className="text-teal-500">Excellent Guides</span>
        </h1>
        <p className="text-gray-500 mt-4 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <div className="flex justify-center space-x-4">
          <div className="max-w-xs rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img src={chup} alt="Chup" />
            <div className="bg-teal-500 text-white p-4">
              <h3 className="font-bold text-xl">Say Hi</h3>
              <p>Capybara</p>
            </div>
          </div>
          <div className="max-w-xs rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img src={hehe} alt="Hehe" />
            <div className="bg-teal-500 text-white p-4">
              <h3 className="font-bold text-xl">Hahe</h3>
              <p>Capybara</p>
            </div>
          </div>
          <div className="max-w-xs rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img src={sleep} alt="Sleep" />
            <div className="bg-teal-500 text-white p-4">
              <h3 className="font-bold text-xl">Woaa</h3>
              <p>Capybara</p>
            </div>
          </div>
          <div className="max-w-xs rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={tongtong} alt="Tongtong" />
            <div className="bg-teal-500 text-white p-4">
              <h3 className="font-bold text-xl">Bon Bon</h3>
              <p>Capybara</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-16 px-4">
        <h2 className="text-yellow-500 text-lg">Our Testimonials</h2>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">Good Reviews By <span className="text-teal-500">Clients</span></h1>
        <p className="text-gray-600 mt-4 text-center max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <div className="flex flex-col md:flex-row items-center mt-12">
          <div className="relative">
          <img 
        src={travel2} 
        alt="Travel 2" 
        className="w-80 h-80 object-cover"
      />
          </div>
          <div className="flex flex-col items-center md:items-start md:ml-12 mt-8 md:mt-0">
            <div className="flex items-center">
              <img src={testimonials[currentTestimonial].image} alt={`Profile picture of ${testimonials[currentTestimonial].name}`} className="w-16 h-16 rounded-full" />
              <div className="ml-4">
                <h3 className="text-teal-500 font-bold">{testimonials[currentTestimonial].name}</h3>
                <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-center md:text-left max-w-lg">
              
              {testimonials[currentTestimonial].text}
            </p>
            <div className="flex mt-4">
              <button onClick={handlePrev} className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
              
              </button>
              <button onClick={handleNext} className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
              
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap justify-center items-center p-10 bg-white">
          {logos.map((logo, index) => (
            <div key={index} className="w-1/4">
              <div className="border p-6 flex justify-center items-center h-36 transform transition-transform duration-300 hover:scale-105">
                <img src={logo.src} alt={logo.alt} className="h-18" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="relative flex justify-center items-center py-8">
          <div className="flex overflow-hidden whitespace-nowrap max-w-[calc(200px*6)]">
            <div className="flex animate-[scroll_100s_linear_infinite]">
              {images.map((image, index) => (
                <div key={index} className="relative flex-shrink-0 mx-2">
                  <img src={image.src} alt={image.alt} className="w-48 h-48 rounded-lg shadow-lg transform transition duration-500 hover:scale-105" />
                </div>
              ))}
              {images.map((image, index) => (
                <div key={index + images.length} className="relative flex-shrink-0 mx-2">
                  <img src={image.src} alt={image.alt} className="w-48 h-48 rounded-lg shadow-lg transform transition duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute flex justify-center items-center pointer-events-none">
            <div className="bg-white bg-opacity-75 px-10 py-3 rounded-full shadow-lg flex items-center">
              
              <span className="font-semibold text-gray-800 whitespace-nowrap">Follow On Instagram</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-16 px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
              <img src={logow} alt="Travelin Logo" className="mr-2" />
              </div>
              <p className="mb-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio suspendisse leo neque iaculis molestie sagittis maecenas aenean eget molestie sagittis.
              </p>
              <p className="mb-2 text-white"><strong>PO Box:</strong> +47-252-254-2542</p>
              <p className="mb-2 text-white"><strong>Location:</strong> Collins Street, Sydney, Australia</p>
              <p className="mb-2 text-white"><strong>Email:</strong> info@Travelin.com</p>
              <p className="text-white"><strong>Website:</strong> www.Travelin.com</p>
            </div>
            <div>
              <h2 className="text-xl text-white font-bold mb-4">Quick Link</h2>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-teal-500 text-white">About Us</a></li>
                <li className="mb-2"><a href="#" className="hover:text-teal-500 text-white">Delivery Information</a></li>
                <li className="mb-2"><a href="#" className="hover:text-teal-500 text-white">Privacy Policy</a></li>
                <li className="mb-2"><a href="#" className="hover:text-teal-500 text-white">Terms & Conditions</a></li>
                <li className="mb-2"><a href="#" className="hover:text-teal-500 text-white">Customer Service</a></li>
                <li className="mb-2"><a href="#" className="hover:text-teal-500 text-white">Return Policy</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl text-white font-bold mb-4">Categories</h2>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-teal-500 text-white">Travel</a></li>
                <li className="mb-2"><a href="#" className="hover:text-teal-500 text-white">Technology</a></li>
                <li className="mb-2"><a href="#" className="hover:text-teal-500 text-white">Lifestyle</a></li>
                <li className="mb-2"><a href="#" className="hover:text-teal-500 text-white">Destinations</a></li>
                <li className="mb-2"><a href="#" className="hover:text-teal-500 text-white">Entertainment</a></li>
                <li className="mb-2"><a href="#" className="hover:text-teal-500 text-white">Business</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl text-white font-bold mb-4">Newsletter</h2>
              <p className="mb-4 text-white">
                Join our community of over 200,000 global readers who receive emails filled with news, promotions, and other good stuff.
              </p>
              <div className="flex">
                <input type="email" placeholder="Email Address" className="p-2 rounded-l-lg w-full text-black" />
                <button className="bg-teal-500 text-black px-4 py-2 rounded-r-lg hover:bg-yellow-400 transition duration-300">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1E3A] flex justify-center items-center p-5">
        <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
          <div className="flex items-center space-x-4 ml-7">
            <span className="text-white">We Support:</span>
            
          </div>
          <div className="flex space-x-2 mr-8">
            <div className="bg-white text-black rounded-md px-6 py-2 text-lg">English</div>
            <div className="bg-white text-black rounded-md px-6 py-2 text-lg">$ USD</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;