// src/components/Profile/ProfileSidebar.jsx
import React from 'react';

const menuItems = [
  'View public profile',
  'Profile',
  'Photo',
  'Account Security',
  'Subscriptions',
  'Payment methods',
  'Privacy',
  'Notification Preferences',
  'API clients',
  'Close account',
];

const ProfileSidebar = () => {
  return (
    <div className="p-4 ">
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center text-2xl font-semibold text-white">
          AD
        </div>
        <h2 className="mt-4 text-center font-semibold text-lg">Avishkar Deogharia</h2>
      </div>
      <ul className="space-y-2 text-sm">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`px-3 py-2 rounded hover:bg-purple-100 cursor-pointer ${
              item === 'Profile' ? 'bg-purple-100 font-medium text-purple-700' : ''
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSidebar;
