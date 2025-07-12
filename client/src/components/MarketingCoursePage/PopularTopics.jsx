import React from "react";

const PopularTopics = () => {
  const topics = [
    {
      name: "Digital Marketing",
      learners: "2.1M+",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
      description: "Master online marketing strategies",
    },
    {
      name: "SEO",
      learners: "1.8M+",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
      description: "Rank higher on search engines",
    },
    {
      name: "Social Media Marketing",
      learners: "1.5M+",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop",
      description: "Build engaging social presence",
    },
    {
      name: "Content Marketing",
      learners: "1.2M+",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=200&fit=crop",
      description: "Create content that converts",
    },
    {
      name: "Email Marketing",
      learners: "980K+",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=200&h=200&fit=crop",
      description: "Build and nurture email lists",
    },
    {
      name: "Google Ads",
      learners: "1.3M+",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
      description: "Master paid advertising",
    },
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:border-purple-300 cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={topic.image}
                  alt={topic.name}
                  className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1 transition duration-200 hover:text-purple-700">
                  {topic.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{topic.description}</p>
                <p className="text-xs text-gray-500">{topic.learners} learners</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularTopics; 