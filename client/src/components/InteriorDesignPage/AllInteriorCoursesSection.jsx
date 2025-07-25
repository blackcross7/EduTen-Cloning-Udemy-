import React, { useState } from "react";
import { ChevronDown, ChevronUp, Heart } from "lucide-react";

const filters = [
  { label: "4.5", count: "(10,000)" },
  { label: "4.0", count: "(10,000)" },
  { label: "3.5", count: "(10,000)" },
  { label: "3.0", count: "(10,000)" },
];

const durations = [
  { label: "0-1 Hour", count: "(7,756)" },
  { label: "1-3 Hours", count: "(10,000)" },
  { label: "3-6 Hours", count: "(7,108)" },
  { label: "6-17 Hours", count: "(3,822)", disabled: true },
];

const topicOptions = [
  { label: "Sales Skills", count: "(984)" },
  { label: "Project Management", count: "(953)" },
  { label: "Entrepreneurship Fundamentals", count: "(795)" },
  { label: "Business Strategy", count: "(669)", disabled: true },
];

const subcategoryOptions = [
  { label: "Entrepreneurship", count: "(5,281)" },
  { label: "Management", count: "(5,163)" },
  { label: "Project Management", count: "(3,548)" },
  { label: "Communication", count: "(2,887)", disabled: true },
];

const levelOptions = [
  { label: "All Levels", count: "(10,000)" },
  { label: "Beginner", count: "(10,000)" },
  { label: "Intermediate", count: "(3,952)" },
  { label: "Expert", count: "(737)" },
];

const languageOptions = [
  { label: "English", count: "(10,000)" },
  { label: "Hindi", count: "(10,000)" },
  { label: "Tamil", count: "(3,952)" },
  { label: "French", count: "(737)" },
];

const priceOptions = [
  { label: "Paid", count: "(10,000)" },
  { label: "Free", count: "(3,952)" },
];

const practiceOptions = [
  { label: "Quizzes", count: "(10,000)" },
  { label: "Coding Exercises", count: "(3,952)" },
  { label: "Practice Tests", count: "(3,342)" },
  { label: "Role Plays", count: "(952)" },
];

const subtitleOptions = [
  { label: "English", count: "(10,000)" },
  { label: "Portugues", count: "(3,952)" },
  { label: "French", count: "(3,342)" },
  { label: "Hindi", count: "(952)" },
];


const courses = [
  {
    title: "How to Work with Interior Design Styles Like a Pro",
    subtitle: "Interior Design Styles Demystified",
    instructor: "Erikka Fogleman",
    rating: "4.5",
    students: "(11,144)",
    duration: "6 total hours • 42 lectures • All Levels",
    badge: "Bestseller",
    price: "₹3,219",
    image: "/assets/interior/course1.jpg",
    hoverLearn: ["Understand different interior design styles", "Apply styles to your projects", "Build client-ready concepts"]
  },
  {
    title: "How to Design a Room in 10 Easy Steps",
    subtitle: "Interior Design Made Simple",
    instructor: "Erikka Fogleman",
    rating: "4.6",
    students: "(8,511)",
    duration: "2 total hours • 36 lectures • Beginner",
    badge: "",
    price: "₹3,309",
    image: "/assets/interior/course2.jpg",
    hoverLearn: ["Design rooms efficiently", "Learn layout planning", "Apply real-world techniques"]
  },
  {
    title: "How to Use Color Like a Pro",
    subtitle: "Interior Design Color Schemes Made Easy",
    instructor: "Erikka Fogleman",
    rating: "4.7",
    students: "(6,034)",
    duration: "2 total hours • 26 lectures • All Levels",
    badge: "Bestseller",
    price: "₹3,849",
    image: "/assets/interior/course3.jpg",
    hoverLearn: ["Choose colors confidently", "Apply psychology of color", "Use palettes professionally"]
  },
  {
    title: "The Complete SketchUp & Vray Course for Interior Design",
    subtitle: "Modelling, Rendering, and Post-Production in under 7 hours",
    instructor: "Arch Gyan, Sketchup Guru",
    rating: "4.6",
    students: "(5,434)",
    duration: "20.5 total hours • 162 lectures • All Levels",
    badge: "Bestseller",
    price: "₹3,219",
    image: "/assets/interior/course4.jpg",
    hoverLearn: ["Model in SketchUp", "Render in Vray", "Post-process in Photoshop"]
  },
  {
    title: "Design is in the Details: How to Accessorize Like a Pro",
    subtitle: "Focus on details to enhance interior design",
    instructor: "Erikka Fogleman",
    rating: "4.7",
    students: "(2,773)",
    duration: "3 total hours • 27 lectures • Beginner",
    badge: "",
    price: "₹3,629",
    image: "/assets/interior/course5.jpg",
    hoverLearn: ["Accessorize interiors effectively", "Combine textures & accents", "Improve small-space aesthetics"]
  },
  {
    title: "Learn SketchUp Pro the Right Way!",
    subtitle: "Strong habits and efficient 3D modeling",
    instructor: "Daniel Brown",
    rating: "4.6",
    students: "(2,521)",
    duration: "7.5 total hours • 74 lectures • All Levels",
    badge: "",
    price: "₹2,369",
    image: "/assets/interior/course6.avif",
    hoverLearn: ["Master SketchUp tools", "Model interiors accurately", "Build design-ready files"]
  },
  {
  title: "How to Use Lighting Design to Transform your Home",
  subtitle: "Learn How to Use Lighting in your Interior Design Like a Pro",
  instructor: "Erikka Fogleman",
  rating: "4.6",
  students: "(2,057)",
  duration: "2 total hours • 31 lectures • All Levels",
  badge: "Bestseller",
  price: "₹3,799",
  image: "/assets/interior/course7.jpeg",
  hoverLearn: ["Use lighting to transform a space", "Apply design principles", "Create mood with light"]
},
{
  title: "Intro to Interior Design Course",
  subtitle: "This course will give you good base of knowledge about interior design enough to start designing few project of your own",
  instructor: "Mohammad Ala Tahhan",
  rating: "3.6",
  students: "(1,594)",
  duration: "9.5 total hours • 52 lectures • All Levels",
  badge: "",
  price: "₹2,939",
  image: "/assets/interior/course8.jpg",
  hoverLearn: ["Understand interior design basics", "Design your own projects", "Work with color and layout"]
},
{
  title: "Houseplants 101: A Beginners Guide to Indoor Gardening",
  subtitle: "Learn how to grow your own jungle at home and stop being afraid of houseplants!",
  instructor: "Tyler Welsh",
  rating: "4.5",
  students: "(1,336)",
  duration: "1 total hour • 9 lectures • Beginner",
  badge: "Highest Rated",
  price: "₹2,259",
  image: "/assets/interior/course9.jpg",
  hoverLearn: ["Care for houseplants", "Choose the right indoor plants", "Set up your indoor garden"]
}

];
const FilterSection = ({ title, options, show, toggle }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-3 cursor-pointer text-lg font-semibold" onClick={toggle}>
      <h4>{title}</h4>
      {show ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
    </div>

    {show &&
      options.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-2 mb-2 text-[15px] ${item.disabled ? "opacity-50" : ""}`}
        >
          <input type="checkbox" disabled={item.disabled} className="accent-purple-600" />

          {/* Label and stars (only for Ratings) */}
          <div className="flex items-center gap-1">
            <span className="text-gray-700 font-medium">{item.label}</span>

            {/* ⭐ Only show stars if section title is Ratings */}
            {title === "Ratings" && (
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => {
                  const rating = parseFloat(item.label);
                  return (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={
                        rating >= star
                          ? "#facc15"
                          : rating >= star - 0.5
                          ? "url(#half-grad)"
                          : "#e5e7eb"
                      }
                      className="w-4 h-4"
                    >
                      <defs>
                        <linearGradient id="half-grad">
                          <stop offset="50%" stopColor="#facc15" />
                          <stop offset="50%" stopColor="#e5e7eb" />
                        </linearGradient>
                      </defs>
                      <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
                    </svg>
                  );
                })}
              </div>
            )}

            {title === "Ratings" && (
              <span className="text-gray-600 text-sm ml-1">& up</span>
            )}
          </div>

          <span className="text-gray-500">{item.count}</span>
        </div>
      ))}

    {show && <button className="mt-2 text-purple-600 font-medium text-[15px]">Show more</button>}
    <hr className="mt-4 border-gray-300" />
  </div>
);


// ✅ Pagination component
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center mt-10 mb-16">
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, idx) => {
          const page = idx + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 rounded-md border text-sm font-semibold ${isActive
                ? "bg-purple-600 text-white"
                : "bg-white border-gray-300 text-gray-800 hover:bg-gray-100"
                }`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const AllInteriorCoursesSection = () => {
  const [visibleHoverIndex, setVisibleHoverIndex] = useState(null);
  const [showRatings, setShowRatings] = useState(false);
  const [showDurations, setShowDurations] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [showLevels, setShowLevels] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showPaids, setShowPaids] = useState(false);
  const [showPractices, setShowPractices] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3;
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const paginatedCourses = courses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <div className="px-4 sm:px-6 xl:px-16 pt-10 pb-20 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-[24px] sm:text-[28px] font-extrabold text-gray-900">All Business courses</h2>
        <span className="text-sm font-semibold text-gray-700">{courses.length} results</span>
      </div>

      <div className="border px-4 py-4 mb-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-3 text-base font-bold text-[#2d2f31] bg-[#f7f9fa] border-[#d1d7dc]">
        <span className="text-purple-600 text-3xl sm:text-4xl font-bold">ⓘ</span>
        <p>Not sure? All courses have a 30-day money-back guarantee</p>
      </div>

      {/* Filter + Sort */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mb-8">
        <button
          className="flex items-center gap-2 border px-4 py-2 rounded-md font-semibold text-base"
          onClick={() => setShowFilters(!showFilters)}
        >
          <span className="text-2xl">☰</span> Filter
        </button>
        <div className="flex items-center gap-2 border px-4 py-2 rounded-md">
          <span className="text-base font-semibold text-gray-800">Sort by</span>
          <select className="bg-white text-base focus:outline-none">
            <option>Most Popular</option>
            <option>Highest Rated</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
       {showFilters && (
  <>
    <aside
      className="
        fixed top-0 left-0 z-50 h-full w-[85vw] max-w-xs
        xl:static xl:block lg:w-1/3 lg:min-w-[220px]
        bg-white shadow-2xl p-5 overflow-y-auto transition-transform duration-300 ease-in-out
        rounded-tr-xl rounded-br-xl
      "
    >
      <button
        className="xl:hidden absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
        onClick={() => setShowFilters(false)}
        aria-label="Close filters"
      >
        ✕
      </button>

      {/* Optional heading for mobile */}
      <h3 className="text-xl font-bold mb-4 xl:hidden">Filters</h3>

      <FilterSection title="Ratings" show={showRatings} toggle={() => setShowRatings(!showRatings)} options={filters} />
      <FilterSection title="Video Duration" show={showDurations} toggle={() => setShowDurations(!showDurations)} options={durations} />
      <FilterSection title="Topic" show={showTopics} toggle={() => setShowTopics(!showTopics)} options={topicOptions} />
      <FilterSection title="Subcategory" show={showSubcategories} toggle={() => setShowSubcategories(!showSubcategories)} options={subcategoryOptions} />
      <FilterSection title="Level" show={showLevels} toggle={() => setShowLevels(!showLevels)} options={levelOptions} />
      <FilterSection title="Language" show={showLanguages} toggle={() => setShowLanguages(!showLanguages)} options={languageOptions} />
      <FilterSection title="Price" show={showPaids} toggle={() => setShowPaids(!showPaids)} options={priceOptions} />
      <FilterSection title="Practice" show={showPractices} toggle={() => setShowPractices(!showPractices)} options={practiceOptions} />
      <FilterSection title="Subtitle" show={showSubtitles} toggle={() => setShowSubtitles(!showSubtitles)} options={subtitleOptions} />
    </aside>

    {/* Backdrop */}
    <div
      className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden"
      onClick={() => setShowFilters(false)}
    />
  </>
)}



        <main className="flex-1 space-y-6 relative z-0">
          {paginatedCourses.map((course, i) => (
            <React.Fragment key={i}>
              <div
                className="relative"
                onMouseEnter={() => setVisibleHoverIndex(i)}
                onMouseLeave={() => setVisibleHoverIndex(null)}
              >
                <div className="flex flex-col sm:flex-row gap-4 border-b border-gray-300 pb-6 bg-white">
                  <img src={course.image} alt={course.title} className="w-full sm:w-[332px] h-auto sm:h-[230px] object-center rounded border" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-700">{course.subtitle}</p>
                    <p className="text-sm text-gray-700 mt-1">{course.instructor}</p>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <span className="font-bold text-yellow-700">{course.rating}</span>
                      <span className="text-yellow-600">★</span>
                      <span className="text-gray-600">{course.students}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{course.duration}</div>
                    {course.badge && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold mt-1 inline-block">
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-right font-bold text-[15px] text-gray-900 mt-2 sm:mt-0">{course.price}</div>
                </div>

                {visibleHoverIndex === i && (
                  <div className="hidden sm:block absolute -top-[140px] left-[260px] w-[360px] shadow-2xl rounded-md bg-white border border-gray-300 px-5 py-4 z-50">
                    <h4 className="font-bold text-gray-900 text-sm mb-3">What you’ll learn</h4>
                    <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                      {course.hoverLearn.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center mt-6">
                      <button className="bg-purple-600 w-[210px] text-white font-semibold text-lg px-4 py-2 rounded hover:bg-purple-700 transition">
                        Add to cart
                      </button>
                      <div className="w-10 h-10 rounded-full border-2 hover:bg-purple-100 border-purple-600 flex items-center justify-center mr-6">
                        <Heart className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Trust Eduten Section – only on first page after 2nd course */}
              {currentPage === 1 && i === 1 && (
                <div className="border border-gray-300 bg-white rounded-xl px-6 py-6 text-left space-y-4 mt-6 shadow-sm">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Top companies trust Eduten</h3>
                  <p className="text-sm text-gray-700">
                    Get your team access to Eduten’s top 250,000+ courses
                  </p>
                  <div className="flex justify-start flex-wrap gap-6 mt-2">
                    {["logo1.svg", "logo2.svg", "logo3.svg", "logo4.svg"].map((logo, idx) => (
                      <img
                        key={idx}
                        src={`/assets/business/${logo}`}
                        alt={`Logo ${idx}`}
                        className="h-8 object-contain"
                      />
                    ))}
                  </div>
                  <div className="pt-2">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-4 py-2 rounded">
                      Try Eduten Business
                    </button>
                  </div>
                </div>
              )}

            </React.Fragment>
          ))}

          {/* ✅ Pagination rendered below course list */}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>
    </div>
  );
};

export default AllInteriorCoursesSection;