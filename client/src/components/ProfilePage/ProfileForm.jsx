// src/components/Profile/ProfileForm.jsx
import React from 'react';

const ProfileForm = () => {
  return (
    <div className=" p-6 sm:p-10 shadow-lg border border-gray-200">
      <h2 className="text-2xl sm:text-3xl text-center border-b-2 border-gray-300 font-bold mb-8 text-gray-800">
        Public Profile
      </h2>

      {/* Basics */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Basics</h3>

        <div className="mt-4 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Headline"
            maxLength={60}
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            Add a professional headline like, "Instructor at Udemy" or "Architect."
          </p>
        </div>
      </section>

      {/* Biography */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Biography</h3>
        <textarea
          placeholder="Tell learners about yourself"
          rows={5}
          className="form-textarea border border-gray-800 rounded-lg p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <p className="text-sm text-gray-500 mt-1">
          Links and coupon codes are not permitted in this section.
        </p>
      </section>

      {/* Language */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Language</h3>
        <select className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
          <option>English (US)</option>
          <option>English (UK)</option>
          <option>Hindi</option>
        </select>
      </section>

      {/* Links */}
      <section className="mb-10">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Links</h3>
        <div className="space-y-4">

          {/* Website */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
            <label htmlFor="website" className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 min-w-[110px] text-right">
              Website
            </label>
            <input
              id="website"
              type="text"
              placeholder="http://yourwebsite.com"
              className="flex-1 px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Facebook */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
            <label htmlFor="facebook" className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 min-w-[110px] text-right">
              Facebook
            </label>
            <input
              id="facebook"
              type="text"
              placeholder="facebook.com/username"
              className="flex-1 px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Instagram */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
            <label htmlFor="instagram" className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 min-w-[110px] text-right">
              Instagram
            </label>
            <input
              id="instagram"
              type="text"
              placeholder="instagram.com/username"
              className="flex-1 px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* LinkedIn */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
            <label htmlFor="linkedin" className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 min-w-[110px] text-right">
              LinkedIn
            </label>
            <input
              id="linkedin"
              type="text"
              placeholder="linkedin.com/in/username"
              className="flex-1 px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* TikTok */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
            <label htmlFor="tiktok" className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 min-w-[110px] text-right">
              TikTok
            </label>
            <input
              id="tiktok"
              type="text"
              placeholder="tiktok.com/@username"
              className="flex-1 px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* X (Twitter) */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
            <label htmlFor="x" className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 min-w-[110px] text-right">
              X (Twitter)
            </label>
            <input
              id="x"
              type="text"
              placeholder="x.com/username"
              className="flex-1 px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* YouTube */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
            <label htmlFor="youtube" className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 min-w-[110px] text-right">
              YouTube
            </label>
            <input
              id="youtube"
              type="text"
              placeholder="youtube.com/username"
              className="flex-1 px-4 py-2 text-sm focus:outline-none"
            />
          </div>

        </div>
      </section>





      {/* Save button */}
      <div className="flex justify-end">
        <button className="bg-purple-700 text-white font-medium py-2 px-6 rounded-full hover:bg-purple-800 transition-all duration-200">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
