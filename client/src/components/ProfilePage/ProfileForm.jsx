import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../../store/authStore';
import toast from 'react-hot-toast';

const ProfileForm = () => {
  const { user, updateProfile, loading, checkAuth } = useAuthStore();
  const [form, setForm] = useState({
    name: '',
    email: '',
    headline: '',
    biography: '',
    language: '',
    links: {
      website: '',
      facebook: '',
      instagram: '',
      linkedin: '',
      tiktok: '',
      x: '',
      youtube: '',
    },
  });

  useEffect(()=>{
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || '',
        email: user.email || '',
        headline: user.headline || '',
        biography: user.biography || '',
        language: user.language || '',
        links: {
          website: user.links?.website || '',
          facebook: user.links?.facebook || '',
          instagram: user.links?.instagram || '',
          linkedin: user.links?.linkedin || '',
          tiktok: user.links?.tiktok || '',
          x: user.links?.x || '',
          youtube: user.links?.youtube || '',
        },
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in form.links) {
      setForm((prev) => ({
        ...prev,
        links: { ...prev.links, [name]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading('Updating profile...');
    await updateProfile(form);

    const err = useAuthStore.getState().error;
    if (!err) {
      toast.success('Profile updated successfully.', { id: toastId });
    } else {
      toast.error(err, { id: toastId });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-10 shadow-lg border border-gray-200">
      <h2 className="text-2xl sm:text-3xl text-center border-b-2 border-gray-300 font-bold mb-8 text-gray-800">
        Public Profile
      </h2>

      {/* Basics */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Basics</h3>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            disabled
            className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-sm cursor-not-allowed"
          />
          <input
            type="text"
            name="headline"
            placeholder="Headline"
            value={form.headline}
            maxLength={60}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </section>

      {/* Biography */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Biography</h3>
        <textarea
          name="biography"
          placeholder="Tell learners about yourself"
          value={form.biography}
          onChange={handleChange}
          rows={5}
          className="form-textarea border border-gray-800 rounded-lg p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </section>

      {/* Language */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Language</h3>
        <select
          name="language"
          value={form.language}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option>English (US)</option>
          <option>English (UK)</option>
          <option>Hindi</option>
        </select>
      </section>

      {/* Links */}
      <section className="mb-10">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Links</h3>
        {Object.entries(form.links).map(([key, value]) => (
          <div
            key={key}
            className="flex items-center border border-gray-300 rounded overflow-hidden focus-within:ring-2 focus-within:ring-purple-500 mb-4"
          >
            <label className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 min-w-[110px] text-right capitalize">
              {key === 'x' ? 'X (Twitter)' : key}
            </label>
            <input
              type="text"
              name={key}
              value={value}
              onChange={handleChange}
              placeholder={`${key}.com/username`}
              className="flex-1 px-4 py-2 text-sm focus:outline-none"
            />
          </div>
        ))}
      </section>

      {/* Save button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-purple-700 text-white font-medium py-2 px-6 rounded-full hover:bg-purple-800 transition-all duration-200 disabled:opacity-60"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
