import React from "react";

const trending = {
  main: {
    title: "ChatGPT is a top skill",
    link: "#",
    learners: "4,671,914 learners",
  },
  categories: [
    {
      heading: "Development",
      skills: [
        { name: "Python", learners: "48,542,377", link: "#" },
        { name: "Web Development", learners: "14,144,783", link: "#" },
        { name: "Data Science", learners: "7,939,937", link: "#" },
      ],
    },
    {
      heading: "Design",
      skills: [
        { name: "Blender", learners: "2,976,492", link: "#" },
        { name: "Graphic Design", learners: "4,559,243", link: "#" },
        { name: "User Experience (UX) Design", learners: "2,096,003", link: "#" },
      ],
    },
    {
      heading: "Business",
      skills: [
        { name: "PMI Project Management Professional (PMP)", learners: "2,651,983", link: "#" },
        { name: "Microsoft Power BI", learners: "4,780,583", link: "#" },
        { name: "PMI Certified Associate in Project Management (CAPM)", learners: "438,333", link: "#" },
      ],
    },
  ],
};

const TrendingNowSection = () => (
  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Trending Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b pb-8">
        {/* Main trending skill */}
        <div>
          <h3 className="text-2xl font-bold mb-2">{trending.main.title}</h3>
          <a href={trending.main.link} className="text-purple-700 font-semibold hover:underline">
            See ChatGPT courses &rsaquo;
          </a>
          <div className="text-gray-500 text-sm mt-2">{trending.main.learners}</div>
          <button className="mt-8 w-full border-2 border-purple-600 text-purple-700 font-semibold rounded-md py-2 hover:bg-purple-50 transition">
            Show all trending skills <span aria-hidden>↗</span>
          </button>
        </div>
        {/* Categories */}
        {trending.categories.map((cat) => (
          <div key={cat.heading}>
            <h4 className="font-bold text-lg mb-2">{cat.heading}</h4>
            <ul className="space-y-3">
              {cat.skills.map((skill) => (
                <li key={skill.name}>
                  <a href={skill.link} className="text-purple-700 font-semibold hover:underline">
                    {skill.name} &rsaquo;
                  </a>
                  <div className="text-gray-500 text-xs">{skill.learners} learners</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrendingNowSection;