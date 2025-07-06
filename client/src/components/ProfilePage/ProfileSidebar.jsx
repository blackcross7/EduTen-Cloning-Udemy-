import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

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
  'Logout',
];

const ProfileSidebar = () => {
  const { user, logout } = useAuthStore();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const initials = user?.name
    ? user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
    : 'U';

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    logout(); // Clear auth state and cookie
    setShowModal(false);
    navigate('/'); // ⬅️ Redirect to homepage
  };

  return (
    <div className="p-4">
      {/* Profile Avatar + Name */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center text-2xl font-semibold text-white">
          {initials}
        </div>
        <h2 className="mt-4 text-center font-semibold text-lg">
          {user?.name || 'User'}
        </h2>
      </div>

      {/* Menu Items */}
      <ul className="space-y-2 text-sm">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => item === 'Logout' && handleLogout()}
            className={`px-3 py-2 rounded hover:bg-purple-100 cursor-pointer ${
              item === 'Profile' ? 'bg-purple-100 font-medium text-purple-700' : ''
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Logout Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSidebar;
