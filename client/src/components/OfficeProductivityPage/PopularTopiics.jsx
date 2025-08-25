const topics = [
  "Microsoft Excel",
  "Google Sheets",
  "Microsoft Word",
  "PowerPoint Design",
  "Google Workspace",
  "Outlook Productivity",
  "Project Management Tools",
  "Time Management",
  "Keyboard Shortcuts",
  "Data Visualization",
  "Note-taking with OneNote",
  "Task Management (Todoist, Trello, Asana)",
  "Email Management",
  "Remote Collaboration",
  "Automation with Zapier",
];

const PopularTopics = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">
        Popular Office Productivity Topics
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {topics.map((topic, idx) => (
          <div
            key={idx}
            className="bg-white text-black border  rounded-md px-4 py-2 text-center cursor-pointer hover:border-gray-500
                       hover:bg-gray-100 transition-colors duration-300"
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTopics;
