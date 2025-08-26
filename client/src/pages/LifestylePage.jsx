import { useState } from "react";
import FeaturedCourses from "../components/LifestylePage/FeaturedCourses";
import PopularTopics from "../components/LifestylePage/PopularTopics";
import PopularInstructors from "../components/LifestylePage/PopularInstructors";
import CoursesToGetStarted from "../components/LifestylePage/CoursesToGetStarted";
import AllCourses from "../components/LifestylePage/AllCourses";
import { courses as lifestyleCourses } from "../components/LifestylePage/data/mockData";

import {
  popularCourses,
  trendingCourses,
  popularHoverDetails,
  trendingHoverDetails,
  popularRatingData,
  trendingRatingData,
} from "../components/LifestylePage/data/mockData";

export default function LifestylePage() {
  const [sortBy, setSortBy] = useState("Most Popular");
  const [courses, setCourses] = useState([]);

  return (
    <>
      <div className="min-h-screen ">        
        <div className="max-w-7xl mx-auto px-4">
          <CoursesToGetStarted
            title="Lifestyle"
            popularCourses={popularCourses}
            trendingCourses={trendingCourses}
            popularHoverDetails={popularHoverDetails}
            trendingHoverDetails={trendingHoverDetails}
            popularRatingData={popularRatingData}
            trendingRatingData={trendingRatingData}
          />
          <FeaturedCourses courses={courses} />
          <PopularTopics />
          <PopularInstructors />
          <AllCourses title="Lifestyle" courses={lifestyleCourses} />

        </div>

        {/* Why Learn Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why learn on Udemy?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <svg
                    className="w-16 h-16 mx-auto text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Learn in-demand skills with over 250,000 video courses
                </h3>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <svg
                    className="w-16 h-16 mx-auto text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Choose courses taught by real-world experts
                </h3>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <svg
                    className="w-16 h-16 mx-auto text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Learn at your own pace, with lifetime access on mobile and desktop
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
