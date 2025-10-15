import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { FaFilter, FaStar, FaInfoCircle } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Guitar Mastery for Beginners",
    subtitle: "Strum your first song in just weeks 🎸",
    instructor: "John Mayer",
    rating: 4.7,
    reviews: 2100,
    price: "₹499",
    originalPrice: "₹1299",
    students: 8500,
    hours: "12h 30m",
    level: "Beginner",
    premium: true,
    bestseller: true,
    image: "/assets/MusicPage/guitar-course.jpg",
    learnPoints: [
      "Master basic open chords and strumming patterns",
      "Learn to play simple songs within weeks",
      "Develop fingerpicking and rhythm techniques",
      "Understand tuning and guitar maintenance",
    ],
  },
  {
    id: 2,
    title: "Piano Essentials: From Zero to Hero",
    subtitle: "Unlock melodies that touch the soul 🎹",
    instructor: "Alicia Keys",
    rating: 4.8,
    reviews: 1800,
    price: "₹699",
    originalPrice: "₹1599",
    students: 6700,
    hours: "15h 10m",
    level: "Beginner to Intermediate",
    premium: true,
    bestseller: true,
    image: "/assets/MusicPage/piano-course.webp",
    learnPoints: [
      "Understand piano keys, scales, and hand positioning",
      "Play simple melodies and progressions",
      "Read sheet music and basic notation",
      "Build confidence with popular beginner songs",
    ],
  },
  {
    id: 3,
    title: "Learn Singing with Confidence",
    subtitle: "Find your voice and own the stage 🎤",
    instructor: "Adele Laurie",
    rating: 4.6,
    reviews: 1500,
    price: "₹599",
    originalPrice: "₹1399",
    students: 4900,
    hours: "10h 45m",
    level: "All Levels",
    premium: true,
    bestseller: true,
    image: "/assets/MusicPage/singing-course.webp",
    learnPoints: [
      "Discover breathing and vocal warm-up techniques",
      "Improve pitch, tone, and vocal range",
      "Sing confidently with stage presence tips",
      "Learn to protect and care for your voice",
    ],
  },
  {
    id: 4,
    title: "Music Production in FL Studio",
    subtitle: "Turn your ideas into chart-topping hits 🎶",
    instructor: "Martin Garrix",
    rating: 4.9,
    reviews: 3100,
    price: "₹799",
    originalPrice: "₹1999",
    students: 12000,
    hours: "20h 00m",
    level: "Intermediate",
    premium: true,
    bestseller: true,
    image: "/assets/MusicPage/production-course.webp",
    learnPoints: [
      "Learn FL Studio interface and workflow",
      "Create beats, melodies, and basslines",
      "Mix and master tracks like professionals",
      "Export and share your own original music",
    ],
  },
  {
    id: 5,
    title: "Classical Violin Techniques",
    subtitle: "Bring elegance and power to every note 🎻",
    instructor: "Nicola Benedetti",
    rating: 4.8,
    reviews: 1200,
    price: "₹649",
    originalPrice: "₹1699",
    students: 5300,
    hours: "14h 20m",
    level: "Intermediate to Advanced",
    premium: true,
    bestseller: true,
    image: "/assets/MusicPage/violin-course.jpg",
    learnPoints: [
      "Hold the violin and bow with proper posture",
      "Play scales, arpeggios, and beginner exercises",
      "Develop vibrato and advanced bowing skills",
      "Perform classical pieces with confidence",
    ],
  },
  {
    id: 6,
    title: "Electronic Music with Ableton Live",
    subtitle: "Produce beats that move the crowd 🎧",
    instructor: "Deadmau5",
    rating: 4.7,
    reviews: 2000,
    price: "₹899",
    originalPrice: "₹2199",
    students: 9800,
    hours: "18h 15m",
    level: "Advanced",
    premium: true,
    bestseller: true,
    image: "/assets/MusicPage/ableton-course.webp",
    learnPoints: [
      "Explore Ableton Live’s powerful features",
      "Create electronic beats and loops",
      "Layer synths, effects, and automation",
      "Produce full-length EDM tracks",
    ],
  },
];


const instructors = [
  { name: "John Mayer", img: "/assets/MusicPage/instructor1.jpg" },
  { name: "Alicia Keys", img: "/assets/MusicPage/instructor2.webp" },
  { name: "Adele Laurie", img: "/assets/MusicPage/instructor3.jpg" },
  { name: "Martin Garrix", img: "/assets/MusicPage/instructor4.jpg" },
];

const faqs = [
  {
    question: "Do I need prior music knowledge?",
    answer:
      "Not at all! Most of our courses are designed for complete beginners and gradually progress to advanced concepts.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes! After successfully completing a course, you will receive a shareable certificate to showcase your achievement.",
  },
  {
    question: "Are there any free courses?",
    answer:
      "Yes, we offer free trial lessons and selected beginner courses so you can start learning without any cost.",
  },
  {
    question: "How long will I have access to the course?",
    answer:
      "Once you enroll, you get lifetime access to the course, including all future updates and added content.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely. All courses are self-paced, allowing you to learn whenever and wherever it suits you best.",
  },
  {
    question: "Which devices can I use to watch the lessons?",
    answer:
      "You can access the courses on any device — desktop, laptop, tablet, or smartphone — with a stable internet connection.",
  },
  {
    question: "Is there any support if I get stuck?",
    answer:
      "Yes, our instructors and community forums are available to answer your questions and guide you throughout your learning journey.",
  },
];



const MusicCoursePage = () => {
  // State for FAQs section
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // State for the new "All Music Courses" section
  const [showFilters, setShowFilters] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);
  const [showDurationMore, setShowDurationMore] = useState(false);
  const [showLangsMore, setShowLangsMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(7);

  // Effect to adjust courses per page based on screen width
  useEffect(() => {
    const updateCoursesPerPage = () => {
      setCoursesPerPage(window.innerWidth < 768 ? 5 : 7);
    };
    updateCoursesPerPage();
    window.addEventListener("resize", updateCoursesPerPage);
    return () => window.removeEventListener("resize", updateCoursesPerPage);
  }, []);

  const languages = [
    "English", "Español", "Português", "Türkçe", "Deutsch", "Français", "Italiano", "Polski",
    "Afrikaans", "Magyar", "ქართული", "Latviešu", "Slovenčina", "Kiswahili", "Oʻzbek",
  ];

  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const indexOfLast = currentPage * coursesPerPage;
  const indexOfFirst = indexOfLast - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirst, indexOfLast);


  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-gray-800">
      {/* Hero Section */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold leading-tight text-purple-800 drop-shadow-md">
          Expand your creativity with Music
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Learn instruments, vocals, production, and more from top-rated instructors.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {courses.slice(0, 6).map((course) => (
          <div
            key={course.id}
            className="bg-white border border-purple-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h2 className="text-md font-semibold text-gray-900  group-hover:text-purple-700 transition line-clamp-2">
                {course.title}
              </h2>
              <p className="text-sm  text-gray-500 mt-1">{course.instructor}</p>
              <div className="flex items-center  text-sm mt-2">
                <Star size={16} className="text-yellow-500" />
                <span className="ml-1 font-semibold">{course.rating}</span>
                <span className="text-gray-400 ml-1">({course.reviews})</span>
              </div>
              <div className="mt-2 font-bold text-purple-800">{course.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Categories */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Top Music Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {["🎸 Guitar", "🎹 Piano", "🎤 Singing", "🎧 Production"].map((category) => (
            <div
              key={category}
              className="p-6 border border-purple-200 rounded-xl text-center text-purple-800 font-semibold bg-purple-50 hover:bg-purple-100 hover:shadow-md cursor-pointer transition"
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-24 bg-gradient-to-r from-purple-50 to-white p-10 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What our students say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            ["The piano course helped me start from scratch and now I can play my favorite songs!", "Sneha M."],
            ["Loved the guitar techniques taught by John. Simple and powerful.", "Arjun V."],
            ["As a singer, this platform gave me confidence and clarity.", "Riya S."],
          ].map(([text, author], i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-sm text-gray-700 italic">“{text}”</p>
              <p className="mt-3 text-sm font-semibold text-purple-700">– {author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Instructors */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Learn from World-Class Instructors</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {instructors.map((inst) => (
            <div key={inst.name} className="text-center hover:scale-105 transition-transform">
              <img
                src={inst.img}
                alt={inst.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-2 border-2 border-purple-300"
              />
              <p className="text-sm font-medium text-gray-700">{inst.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-purple-200 rounded-lg p-4 cursor-pointer bg-white shadow-sm hover:shadow-md transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-purple-700">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-700" size={20} />
                ) : (
                  <ChevronDown className="text-purple-700" size={20} />
                )}
              </div>
              {openIndex === index && (
                <p className="text-sm text-gray-700 mt-2 transition-all duration-200">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>


      {/* --- START: NEW RESPONSIVE "ALL MUSIC COURSES" SECTION --- */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">All Music Courses</h2>

        <div className="bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm w-full md:w-auto flex items-start gap-2">
          <FaInfoCircle className="text-purple-600 mt-1 flex-shrink-0" />
          <p className="text-sm text-gray-800">
            Not sure? All courses have a 30-day money-back guarantee
          </p>
        </div>

        <div className="flex items-center gap-4 mt-4 flex-wrap">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 border border-gray-600 font-semibold px-4 py-2 rounded text-sm hover:bg-gray-100 transition"
          >
            <FaFilter /> Filter
          </button>

          <div className="relative inline-block text-left">
            <button
              onClick={() => setSortVisible(!sortVisible)}
              className="border border-gray-600 px-4 py-2 rounded font-semibold text-sm"
            >
              Sort by: Most Popular
            </button>
            {sortVisible && (
              <div className="absolute mt-1 w-40 bg-white border rounded shadow z-10">
                <div className="py-1 text-sm text-gray-900">
                  <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Most Popular</div>
                  <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Highest Rated</div>
                  <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Newest</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
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
                  md:static md:z-auto md:h-auto md:w-72 md:border md:rounded-lg md:p-4 md:shadow-none md:translate-x-0 flex-shrink-0
                `}
              >
                <div className="flex justify-between items-center p-4 pb-0 md:hidden">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <button onClick={() => setShowFilters(false)} className="text-gray-600 text-xl font-bold">&times;</button>
                </div>

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
                        &nbsp;{rating} & up
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
                    className="text-purple-600 text-xs font-semibold mt-2"
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
                    className="text-purple-600 text-xs font-semibold mt-2"
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
                    Apply Filters
                  </button>
                </div>
              </div>
            </>
          )}

          <div className="flex-1">
            {currentCourses.map((course, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-row gap-2 sm:gap-4 border-b py-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-24 h-16 sm:w-40 sm:h-24 object-cover rounded"
                  />

                  <div className="flex flex-col flex-1">
                    <h3 className="text-sm sm:text-base font-bold line-clamp-2">{course.title}</h3>
                    <p className="hidden sm:block text-xs text-gray-600 mt-1 line-clamp-1">{course.subtitle}</p>
                    
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-yellow-500 font-semibold text-xs sm:text-sm">{course.rating}</span>
                      <FaStar className="text-yellow-400 w-3 h-3" />
                      <span className="text-gray-600 text-xs sm:text-sm">({course.students.toLocaleString()})</span>
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      {course.hours} • {course.level}
                    </p>

                    <div className="flex gap-2 mt-2">
                      {course.premium && (
                        <span className="px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded bg-purple-100 text-purple-700">
                          Premium
                        </span>
                      )}
                      {course.bestseller && (
                        <span className="px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded bg-yellow-100 text-yellow-800">
                          Bestseller
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end w-16 sm:w-20 text-right">
                    <span className="text-sm sm:text-base font-bold">{course.price}</span>
                    {course.originalPrice && (
                      <span className="text-[10px] sm:text-xs text-gray-500 line-through">
                        {course.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* --- START: NEW HOVER CARD --- */}
                {/* Hidden on mobile, appears on desktop hover */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full w-80 p-4 rounded-lg shadow-lg bg-white border border-gray-200 z-20 hidden group-hover:block">
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-200"
                  aria-hidden
                />                  <h4 className="font-semibold mb-2 text-gray-900">What you'll learn</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {course.learnPoints?.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700 transition-colors">
                    Add to cart
                  </button>
                </div>
                {/* --- END: NEW HOVER CARD --- */}
              </div>
            ))}

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded disabled:opacity-50 font-semibold text-sm"
              >
                Previous
              </button>
              <span className="text-sm font-semibold">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded disabled:opacity-50 font-semibold text-sm"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* --- END: NEW RESPONSIVE "ALL MUSIC COURSES" SECTION --- */}
    </div>
  );
};

export default MusicCoursePage;