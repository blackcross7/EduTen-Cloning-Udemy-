import React, { useState, useEffect } from "react";
import { FaFilter, FaStar, FaInfoCircle } from "react-icons/fa";

const WebCourseInfoPanel = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);
  const [showDurationMore, setShowDurationMore] = useState(false);
  const [showLangsMore, setShowLangsMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(7);

  useEffect(() => {
    const updateCoursesPerPage = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCoursesPerPage(3);
      } else {
        setCoursesPerPage(7);
      }
    };
    updateCoursesPerPage();
    window.addEventListener("resize", updateCoursesPerPage);
    return () => window.removeEventListener("resize", updateCoursesPerPage);
  }, []);

  const languages = [
    "English", "Español", "Português", "Türkçe", "Deutsch", "Français", "Italiano", "Polski", "Afrikaans",
    "Magyar", "ქართული", "Latviešu", "Slovenčina", "Kiswahili", "Oʻzbek"
  ];

  const courses = [
    {
      title: 'The Complete Full-Stack Web Development Bootcamp',
      image: '/assets/WebDevelopmentPage/boot.jpg',
      subtitle: 'Dr. Angela Yu, Developer and Lead Instructor',
      rating: 4.7,
      students: '443,172',
      hours: '61.5 total hours',
      level: 'All Levels',
      premium: true,
      bestseller: true,
      price: '₹3,219',
      learnPoints: [
        "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
        "Learn the latest technologies, including Javascript, React, Node and even Web3 development.",
        "After the course you will be able to build ANY website you want."
      ]
    },
    
    {
      title: 'The Web Developer Bootcamp 2025',
      image: '/assets/WebDevelopmentPage/webb.jpg',
      subtitle: 'Colt Steele',
      rating: 4.7,
      students: '281,582',
      hours: '74 total hours',
      level: 'All Levels',
      premium: true,
      bestseller: true,
      price: '₹3,399',
      learnPoints: [
        "Master HTML, CSS, JS from scratch.",
        "Real-world projects and challenges.",
        "Strong portfolio to apply for jobs."
      ]
    },
    {
      ad: true
    },
    {
  title: 'Build Responsive Real-World Websites with HTML and CSS',
  image: '/assets/WebDevelopmentPage/html,css.jpeg',
  subtitle: 'Jonas Schmedtmann',
  rating: 4.7,
  students: '114,149',
  hours: '37.5 total hours',
  level: 'All Levels',
  premium: true,
  bestseller: true,
  price: '₹689',
  learnPoints: [
    'Become a modern and confident HTML and CSS developer, no prior knowledge needed!',
    'Design and build a stunning real-world project for your portfolio from scratch',
    'Modern, semantic and accessible HTML5'
  ]
},
{
  title: 'Modern React with Redux [2024 Update]',
  image: '/assets/WebDevelopmentPage/react with redux.jpeg',
  subtitle: 'Stephen Grider',
  rating: 4.6,
  students: '88,426',
  hours: '75.5 total hours',
  level: 'All Levels',
  premium: true,
  bestseller: true,
  price: '₹689',
  learnPoints: [
    'Create dynamic web apps using the latest in web technology',
    'Acquire the programming skills needed to obtain a software engineering job',
    'Practice your skills with many large projects, exercises, and quizzes'
  ]
},

    {
      title: 'Angular - The Complete Guide (2025 Edition)',
      image: '/assets/WebDevelopmentPage/Ang.jpg',
      subtitle: 'Maximilian Schwarzmüller',
      rating: 4.6,
      students: '389,123',
      hours: '46 total hours',
      level: 'All Levels',
      premium: true,
      bestseller: true,
      price: '₹3,399',
      learnPoints: [
        "Build scalable apps using Angular.",
        "Master RxJS, forms, routing, state.",
        "Understand architecture & best practices."
      ]
    },
    {
  title: 'The Complete Web Developer Course 3.0',
  image: '/assets/WebDevelopmentPage/webdev3.0.jpeg',
  subtitle: 'Rob Percival, Codestars • over 2.5 million students worldwide!',
  rating: 4.4,
  students: '72,506',
  hours: '31 total hours',
  level: 'All Levels',
  premium: true,
  bestseller: false,
  price: '₹839',
  learnPoints: [
    'Build websites and webapps',
    'Build HTML-based mobile apps',
    'Get a job as a junior web developer'
  ]
},
{
  title: 'Vue - The Complete Guide (incl. Router & Composition API)',
  image: '/assets/WebDevelopmentPage/vue-js-kk.jpg',
  subtitle: 'Maximilian Schwarzmüller',
  rating: 4.7,
  students: '65,530',
  hours: '32 total hours',
  level: 'All Levels',
  premium: true,
  bestseller: true,
  price: '₹649',
  learnPoints: [
    'Develop and design REST API and REST WEB SERVICES with Spring Boot',
    'Develop MICROSERVICES with Spring Boot and Spring Cloud',
    'Orchestrate microservices with KUBERNETES'
  ]
},

{
  title: 'Spring Boot & Spring Cloud',
  image: '/assets/WebDevelopmentPage/spring-logo.jpg',
  subtitle: 'In28Minutes Official',
  rating: 4.6,
  students: '1,00,000+',
  hours: '25 total hours',
  level: 'Intermediate',
  premium: false,
  bestseller: false,
  price: '₹689',
  learnPoints: [
    'Develop and design REST API and REST WEB SERVICES with Spring Boot',
    'Develop MICROSERVICES with Spring Boot and Spring Cloud',
    'Orchestrate microservices with KUBERNETES'
  ]
},

{
  title: 'Understanding TypeScript',
  image: '/assets/WebDevelopmentPage/typescript.png',
  subtitle: 'Maximilian Schwarzmüller',
  rating: 4.7,
  students: '55,709',
  hours: '22.5 total hours',
  level: 'All Levels',
  premium: true,
  bestseller: true,
  price: '₹839',
  learnPoints: [
    'Use TypeScript and its Features like Types, ES6 Support, Classes, Modules, Interfaces and much more in any of their Projects',
    'Understand what TypeScript really is about and how it works',
    'Why TypeScript offers a real advantage over vanilla JavaScript'
  ]
},
{
    title: 'JavaScript: Understanding the Weird Parts',
    image: '/assets/WebDevelopmentPage/java script weierd.png', 
    subtitle: 'Anthony Alicea',
    rating: 4.7,
    students: '48,954',
    hours: '12.5 total hours',
    level: 'All Levels',
    premium: true,
    bestseller: true,
    price: '₹689',
    originalPrice: '₹4,109',
    learnPoints: [
      "Grasp how JavaScript works and its fundamental concepts",
      "Write solid, good JavaScript code",
      "Understand advanced concepts such as promises, async/await, closures, prototypal inheritance, IIFEs, classes, and much more."
    ]
  },
  {
    title: 'Python and Django Full Stack Web Developer Bootcamp',
    image: '/assets/WebDevelopmentPage/django2.jpg', // Replace with correct path
    subtitle: 'Jose Portilla, Pierian Training',
    rating: 4.5,
    students: '51,500',
    hours: '32 total hours',
    level: 'All Levels',
    premium: true,
    bestseller: true,
    price: '₹689',
    originalPrice: '₹4,109',
    learnPoints: [
      "Learn to build websites with HTML, CSS, Bootstrap, Javascript, jQuery, Python 3, and Django",
      "Understand the full-stack workflow from frontend to backend",
      "Build real-world Django apps and deploy them"
    ]
  },
  {
  title: 'HTML and CSS for Beginners - Build a Website & Launch ONLINE',
  image: '/assets/WebDevelopmentPage/htmk,css.png', // Replace with correct path
  subtitle: 'Edwin Diaz | Coding Faculty Solutions',
  rating: 4.5,
  students: '37,366',
  hours: '9 total hours',
  level: 'All Levels',
  premium: true,
  bestseller: true,
  price: '₹689',
  originalPrice: '₹3,849',
  learnPoints: [
    'You will Learn HTML',
    'You will learn CSS',
    'You will get a certification after the course that you can print'
  ]
},
{
  title: 'Modern JavaScript From The Beginning 2.0 (2024)',
  image: '/assets/WebDevelopmentPage/jscriot.jpg', // Replace with correct path
  subtitle: 'Brad Traversy',
  rating: 4.8,
  students: '35,192',
  hours: '36.5 total hours',
  level: 'All Levels',
  premium: true,
  bestseller: true,
  price: '₹689',
  originalPrice: '₹4,109',
  learnPoints: [
    'Learn the Fundamentals (Variables, Loops, Functions, etc)',
    'Learn How JavaScript Works (Execution Context, Call Stack, Async JS)',
    'Master the Document Object Model & Events (Interactivity)'
  ]
},
{
  title: 'The Complete ASP.NET MVC 5 Course',
  image: '/assets/WebDevelopmentPage/ASP.NET.jpg', // Replace with correct path
  subtitle: 'Mosh Hamedani',
  rating: 4.4,
  students: '34,836',
  hours: '7.5 total hours',
  level: 'All Levels',
  premium: true,
  bestseller: true,
  price: '₹649',
  originalPrice: '₹3,889',
  learnPoints: [
    'Learn the Fundamentals (Variables, Loops, Functions, etc)',
    'Learn How JavaScript Works (Execution Context, Call Stack, Async JS)',
    'Master the Document Object Model & Events (Interactivity)'
  ]
},

  {
    title: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
    image: '/assets/WebDevelopmentPage/saas.jpg', // Replace with correct path
    subtitle: 'Jonas Schmedtmann',
    rating: 4.7,
    students: '45,615',
    hours: '28 total hours',
    level: 'Intermediate',
    premium: true,
    bestseller: true,
    price: '₹569',
    originalPrice: '₹3,399',
    learnPoints: [
      "Tons of modern CSS techniques to create stunning designs and effects",
      "Advanced CSS animations with @keyframes, animation and transition",
      "How CSS works behind the scenes: the cascade, specificity, inheritance, etc."
    ]
  },
  {
  title: 'Docker & Kubernetes: The Practical Guide [2025 Edition]',
  image: '/assets/WebDevelopmentPage/dock.png', // Replace with actual path
  subtitle: 'Academind by Maximilian Schwarzmüller',
  rating: 4.7,
  students: '33,674',
  hours: '23.5 total hours',
  level: 'All Levels',
  premium: true,
  bestseller: true,
  price: '₹689',
  originalPrice: '₹4,109',
  learnPoints: [
    'Learn what Docker and Kubernetes are and why you might want to use them',
    'Learn how to install and use Docker on any system (macOS, Windows, Linux)',
    'Learn how to create and use Images & Containers with Docker'
  ]
},
{
  title: 'Learn and Understand NodeJS (V8, Express, MERN/PERN & more)',
  image: '/assets/WebDevelopmentPage/nodejs_cover.png', // Replace with actual path
  subtitle: 'Anthony Alicea',
  rating: 4.7,
  students: '30,704',
  hours: '14.5 total hours',
  level: 'All Levels',
  premium: true,
  bestseller: false,
  price: '₹649',
  originalPrice: '₹3,329',
  learnPoints: [
    'Dive under-the-hood of how Node.js works to fully understand it',
    'Structure a Node application in modules (CommonJS and ECMAScript modules)',
    'Build a Web Server in Node and understand how it really works'
  ]
}

  
];

  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const indexOfLast = currentPage * coursesPerPage;
  const indexOfFirst = indexOfLast - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirst, indexOfLast);

  return (
    <section className="mt-10 px-4 md:px-10">
      <h2 className="text-2xl font-bold mb-4">All Web Development courses</h2>

      <div className="bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm w-full md:w-[88%] flex items-start gap-2">
        <FaInfoCircle className="text-purple-600 mt-1" />
        <p className="text-sm text-gray-800">
          Not sure? All courses have a 30-day money-back guarantee
        </p>
      </div>

      <div className="flex items-center gap-4 mt-4 flex-wrap">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded text-sm hover:bg-purple-200 transition"
        >
          <FaFilter /> Filter
        </button>

        <div className="relative inline-block text-left">
          <button
            onClick={() => setSortVisible(!sortVisible)}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-medium text-sm"
          >
            Sort by: Most Popular
          </button>
          {sortVisible && (
            <div className="absolute mt-1 w-40 bg-white border rounded shadow z-10">
              <div className="py-1 text-sm text-gray-900">
                <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Most Popular</div>
                <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Highest Rated</div>
                <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Newest</div>
              </div>
            </div>
          )}
        </div>
      </div>

    <div className="flex gap-6 mt-6">
{showFilters && (
  <>
    {/* Mobile Backdrop */}
    <div
      className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
      onClick={() => setShowFilters(false)}
    ></div>

    {/* Sidebar */}
    <div
      className={`
        fixed z-50 top-0 left-0 h-full w-72 bg-white border-r shadow-lg
        flex flex-col
        transition-transform duration-300
        ${showFilters ? "translate-x-0" : "-translate-x-full"}
         md:translate-x-0 md:relative md:h-auto md:border md:rounded-lg md:p-4 md:shadow-none
      `}
    >
      {/* Header + Close (Mobile) */}
      <div className="flex justify-between items-center p-4 pb-0 md:hidden">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button onClick={() => setShowFilters(false)} className="text-gray-600 text-xl font-bold">&times;</button>
      </div>

      {/* Scrollable Filter Content */}
      <div className="flex-1 overflow-y-auto p-4 pt-2 md:p-0 md:overflow-visible">
        <h3 className="text-sm font-semibold mb-2">Ratings</h3>
        {[4.5, 4.0, 3.5, 3.0].map((rating) => (
          <div key={rating} className="flex items-center gap-2 mb-2">
            <input type="radio" name="rating" />
            <span className="flex items-center text-sm">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-yellow-400 ${i < Math.round(rating) ? "opacity-100" : "opacity-30"}`}
                />
              ))}
              &nbsp; & {rating} & up
            </span>
          </div>
        ))}

        <h3 className="text-sm font-semibold mt-6 mb-2">Video Duration</h3>
        {["0-1 Hour", "1-3 Hours", "3-6 Hours", "6-17 Hours", "17+ Hours"]
          .slice(0, showDurationMore ? 5 : 3)
          .map((label, index) => (
            <div key={index} className="mb-1 text-sm">
              <input type="checkbox" className="mr-2" /> {label}
            </div>
          ))}
        <button
          onClick={() => setShowDurationMore(!showDurationMore)}
          className="text-purple-600 text-xs mt-2"
        >
          {showDurationMore ? "Show less" : "Show more"}
        </button>

        <h3 className="text-sm font-semibold mt-6 mb-2">Level</h3>
        {["All Levels", "Beginner", "Intermediate", "Expert"].map((level, index) => (
          <div key={index} className="mb-1 text-sm">
            <input type="checkbox" className="mr-2" /> {level}
          </div>
        ))}

        <h3 className="text-sm font-semibold mt-6 mb-2">Language</h3>
        {languages.slice(0, showLangsMore ? languages.length : 5).map((lang, index) => (
          <div key={index} className="mb-1 text-sm">
            <input type="checkbox" className="mr-2" /> {lang}
          </div>
        ))}
        <button
          onClick={() => setShowLangsMore(!showLangsMore)}
          className="text-purple-600 text-xs mt-2"
        >
          {showLangsMore ? "Show less" : "Show more"}
        </button>

        <h3 className="text-sm font-semibold mt-6 mb-2">Price</h3>
        {["Paid", "Free"].map((price, index) => (
          <div key={index} className="mb-1 text-sm">
            <input type="checkbox" className="mr-2" /> {price}
          </div>
        ))}

        <h3 className="text-sm font-semibold mt-6 mb-2">Subtitles</h3>
        <div className="text-sm">
          <input type="checkbox" className="mr-2" /> Available
        </div>
      </div>

      
      <div className="p-4 border-t md:hidden">
        <button
          onClick={() => setShowFilters(false)}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 text-sm font-semibold"
        >
          Done
        </button>
      </div>
    </div>
  </>
)}


  <div className="flex-1 space-y-8">
    {currentCourses.map((course, index) =>
      course.ad ? (
        <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Top companies trust Udemy</h3>
          <p className="text-sm text-gray-700 mb-3">
            Get your team access to Udemy’s top 250,000+ courses
          </p>
          <div className="flex items-center gap-6 flex-wrap mt-2 mb-4">
            <img src="/assets/WebDevelopmentPage/nasdaq-dark.svg" alt="Nasdaq" className="h-6" />
            <img src="/assets/WebDevelopmentPage/volkswagen-dark.svg" alt="Volkswagen" className="h-6" />
            <img src="/assets/WebDevelopmentPage/netapp-dark.svg" alt="NetApp" className="h-6" />
            <img src="/assets/WebDevelopmentPage/eventbrite-dark.svg" alt="Eventbrite" className="h-6" />
          </div>
          <button className="border border-purple-600 text-purple-700 px-4 py-1 rounded text-sm hover:bg-purple-50">
            Try Udemy Business
          </button>
        </div>
      ) : (
        <div key={index} className="relative group">
          <div className="flex flex-col sm:flex-row gap-4 border-b pb-6">
           <div className="w-full sm:w-52 flex justify-center sm:justify-start">
  <img
    src={course.image}
    alt={course.title}
    className="w-52 h-28 object-cover rounded"
  />
</div>


            <div className="flex flex-col items-center sm:items-start justify-between flex-1 sm:pr-12 text-center sm:text-left">

              <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{course.subtitle}</p>
              <div className="text-sm text-yellow-600 font-medium">
                {course.rating} ⭐ ({course.students})
              </div>
              <p className="text-sm text-gray-500">
                {course.hours} • {course.level}
              </p>
              <div className="flex items-center gap-2 mt-1">
                {course.premium && (
                  <span className="text-xs text-purple-800 bg-purple-100 px-2 py-0.5 rounded">
                    Premium
                  </span>
                )}
                {course.bestseller && (
                  <span className="text-xs text-green-800 bg-green-100 px-2 py-0.5 rounded">
                    Bestseller
                  </span>
                )}
              </div>
            </div>

            <div className="text-right text-base font-semibold text-gray-900 min-w-[80px]">
              {course.price}
            </div>
          </div>

          <div
            className={`
              w-full md:w-80 bg-white shadow-xl border rounded-lg p-4 text-sm text-gray-800 
              mt-4 md:mt-0 
              hidden group-hover:block 
              md:absolute md:top-0 md:left-[300px] z-20
            `}
          >
            <h4 className="font-semibold mb-2">What you’ll learn</h4>
            <ul className="space-y-2 mb-4">
              {course.learnPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✔</span> {point}
                </li>
              ))}
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 text-sm font-medium">
              Add to cart
            </button>
          </div>
        </div>
      )
    )}

    {/* Pagination */}
    <div className="flex justify-center gap-2 mt-10">
      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentPage(idx + 1)}
          className={`px-3 py-1 border rounded text-sm ${
            currentPage === idx + 1
              ? "bg-purple-600 text-white"
              : "bg-white text-gray-700 hover:bg-purple-100"
          }`}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  </div>
</div>

    </section>
  );
};

export default WebCourseInfoPanel;
