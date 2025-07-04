import React, { useState } from 'react';
import { PlayCircle, Star, Infinity } from 'lucide-react';

const courses = [
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    image: '/assets/WebDevelopmentPage/boot.jpg',
    subtitle: 'Dr. Angela Yu, Developer and Lead Instructor',
    price: '₹3,219',
    premium: true,
    bestseller: true,
  },
  {
    title: 'The Web Developer Bootcamp 2025',
    image: '/assets/WebDevelopmentPage/webb.jpg',
    subtitle: 'Colt Steele',
    price: '₹3,399',
    premium: true,
    bestseller: true,
  },
  {
    title: 'The Complete JavaScript Course 2025: From Zero to Expert!',
    image: '/assets/WebDevelopmentPage/jscriot.jpg',
    subtitle: 'Jonas Schmedtmann',
    price: '₹4,109',
    premium: true,
    bestseller: true,
  },
  {
    title: 'Angular - The Complete Guide (2025 Edition)',
    image: '/assets/WebDevelopmentPage/Ang.jpg',
    subtitle: 'Maximilian Schwarzmüller',
    price: '₹3,399',
    premium: true,
    bestseller: true,
  },
];

const hoverDetails = [
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    premium: true,
    bestseller: true,
    updated: 'February 2025',
    duration: '61.5 total hours',
    level: 'All Levels',
    subtitles: true,
    description:
      'Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.',
    points: [
      'Build 16 web development projects for your portfolio.',
      'Learn the latest technologies: React, Node, Web3.',
      'After the course, build ANY website you want.',
    ],
  },
  {
    title: 'The Web Developer Bootcamp 2025',
    premium: true,
    bestseller: false,
    updated: 'June 2025',
    duration: '74 total hours',
    level: 'All Levels',
    subtitles: true,
    description:
      'With 10 Hours of React added. Become a Developer With ONE course - HTML, CSS, JavaScript, React, Node, MongoDB and More!',
    points: [
      'The ins and outs of HTML5, CSS3, and Modern JavaScript',
      'Make REAL web applications using cutting-edge technologies',
      'Create responsive, accessible, and beautiful layouts',
    ],
  },
  {
    title: 'The Complete JavaScript Course 2025: From Zero to Expert!',
    premium: true,
    bestseller: true,
    updated: 'April 2025',
    duration: '71 total hours',
    level: 'All Levels',
    subtitles: true,
    description:
      'The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!',
    points: [
      'Become an advanced, confident, and modern JavaScript developer from scratch',
      'Build 6 beautiful real-world projects for your portfolio',
      'Become job-ready by understanding how JavaScript really works',
    ],
  },
  {
    title: 'Angular - The Complete Guide (2025 Edition)',
    premium: true,
    bestseller: true,
    updated: 'June 2025',
    duration: '56 total hours',
    level: 'All Levels',
    subtitles: true,
    description:
      'Master Angular and build awesome, reactive web apps with the successor of Angular.js',
    points: [
      'Learn modern Angular with signals & standalone components!',
      'Learn HTTP requests, routing, authentication and more.',
      'Build complex, responsive and scalable applications.',
    ],
  },
];

const WebCourseGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getHoverTarget = (index) => {
    if (index === 3) return 2;
    if (index < 3) return index + 1;
    return null;
  };

  const ratingData = [442727, 281518, 224676, 216168];

  return (
    <section className="bg-white text-gray-900 px-6 py-10">
      <div className="pl-4 mb-6">
        <h1 className="text-3xl font-bold mb-1">Top Web Development Courses</h1>
        <h2 className="text-xl text-black font-semibold">Courses to get you started</h2>
        <p className="text-gray-700 text-sm">Explore courses from experienced, real-world experts.</p>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="border rounded-lg shadow-md overflow-hidden transition-all h-[400px] w-full flex flex-col">
              <div className="w-full h-48 flex-shrink-0 overflow-hidden rounded-t">
  <img
    src={course.image}
    alt={course.title}
    className="w-full h-full object-cover"
  />
</div>

              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-md font-bold line-clamp-2">{course.title}</h2>
                  {course.subtitle && (
                    <p className="text-sm text-gray-600 mt-1">{course.subtitle}</p>
                  )}

                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-500 font-bold">4.7</span>
                    <div className="flex text-yellow-500 text-sm">
                      {[...Array(4)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                      <span>☆</span>
                    </div>
                    <span className="text-gray-600 text-xs">({ratingData[index]})</span>
                  </div>

                  <div className="mt-2 text-sm font-semibold text-indigo-700">
                    Current price: {course.price}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                    {course.premium && (
                      <span className="bg-violet-200 text-violet-800 font-semibold px-2 py-1 rounded">
                        Premium
                      </span>
                    )}
                    {course.bestseller && (
                      <span className="bg-green-200 text-green-800 font-semibold px-2 py-1 rounded">
                        Bestseller
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Hover Details */}
            {hoveredIndex !== null &&
              getHoverTarget(hoveredIndex) === index &&
              hoverDetails[hoveredIndex] && (
                <div className="absolute top-0 left-0 w-full bg-white border-2 border-blue-600 rounded-xl shadow-xl p-4 z-20">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">
                    {hoverDetails[hoveredIndex].title}
                  </h2>

                  <div className="flex items-center gap-2 mb-2">
                    {hoverDetails[hoveredIndex].premium && (
                      <span className="bg-violet-200 text-violet-800 text-xs font-semibold px-2 py-1 rounded">
                        Premium
                      </span>
                    )}
                    {hoverDetails[hoveredIndex].bestseller && (
                      <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                        Bestseller
                      </span>
                    )}
                  </div>

                  <p className="text-gray-500 text-sm mb-1">
                    Updated {hoverDetails[hoveredIndex].updated}
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>{hoverDetails[hoveredIndex].duration}</strong> •{' '}
                    {hoverDetails[hoveredIndex].level} • Subtitles
                  </p>
                  <p className="text-gray-800 text-sm mb-2">
                    {hoverDetails[hoveredIndex].description}
                  </p>

                  <ul className="space-y-1 text-sm text-gray-700">
                    {hoverDetails[hoveredIndex].points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-4 bg-violet-600 text-white py-2 px-4 w-full rounded hover:bg-violet-700 transition">
                    Add to Cart
                  </button>
                </div>
              )}
          </div>
        ))}
      </div>

      {/* Feature Strip Between Two Horizontal Lines */}
      <div className="w-full px-4 mt-24 mb-16">
  <div className="max-w-7xl mx-auto space-y-8">
    <hr className="border-t border-gray-300" />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <i className="fas fa-play-circle text-indigo-700 text-4xl"></i>
        <p className="text-base text-gray-900 font-medium">
          Learn in-demand skills with over <br />
          <span className="font-semibold">250,000 video courses</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <i className="fas fa-star text-indigo-700 text-4xl"></i>
        <p className="text-base text-gray-900 font-medium">
          Choose courses taught by <br />
          <span className="font-semibold">real-world experts</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <i className="fas fa-infinity text-indigo-700 text-4xl"></i>
        <p className="text-base text-gray-900 font-medium">
          Learn at your own pace, with lifetime <br />
          <span className="font-semibold">access on mobile and desktop</span>
        </p>
      </div>
    </div>

    <hr className="border-t border-gray-300" />
  </div>
</div>


      {/* Featured Course Section */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-2xl font-bold mb-2">Featured course</h2>
        <p className="text-gray-700 mb-6">Many learners enjoyed this highly rated course for its engaging content.</p>

        <div className="border rounded-md overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="/assets/WebDevelopmentPage/nodejs.png"
            alt="NodeJS Course"
            className="w-full h-auto object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              NodeJS Projects Bootcamp 2025: Learn by Doing
            </h3>
            <p className="text-gray-700 mb-2">
              Master Node.js by building full-featured backend projects step-by-step using Express, MongoDB, REST APIs, and more.
            </p>
            <p className="text-sm text-gray-600 mb-1">By Masynctech Coding School</p>
            <p className="text-sm text-gray-600 mb-1">
              Updated <strong>June 2025</strong> • 25.5 total hours • 246 lectures • All Levels
            </p>
            <div className="flex items-center gap-2 mt-2 text-sm">
              <span className="text-yellow-500 font-bold">4.9</span>
              <div className="flex text-yellow-500 text-sm">★★★★★</div>
              <span className="text-gray-600">(23)</span>
              <span className="bg-orange-200 text-orange-800 font-semibold px-2 py-1 text-xs rounded">Highest Rated</span>
            </div>
            <div className="text-lg font-bold text-gray-900 mt-3">₹2,049</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebCourseGrid;
