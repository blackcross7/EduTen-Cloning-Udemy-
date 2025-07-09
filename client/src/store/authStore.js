import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
    withCredentials: true, 
});

export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            loading: false,
            error: null,

            // Login
            login: async (credentials) => {
                set({ loading: true });
                try {
                    const res = await API.post('/auth/login', credentials);
                    set({ user: res.data.user, error: null });
                } catch (err) {
                    set({ error: err.response?.data?.message || 'Login failed' });
                } finally {
                    set({ loading: false });
                }
            },

            // Signup
            signup: async (userData) => {
                set({ loading: true });
                try {
                    const res = await API.post('/auth/signup', userData);
                    set({ user: res.data.user, error: null }); 
                } catch (err) {
                    set({ error: err.response?.data?.message || 'Signup failed' });
                } finally {
                    set({ loading: false });
                }
            },


            // Logout
            logout: async () => {
                try {
                    await API.post('/auth/logout');
                } catch (err) {
                    console.error('Logout error:', err.response?.data?.message || 'Logout failed');
                } finally {
                    set({ user: null });
                }
            },

            // Update Profile
            updateProfile: async (profileData) => {
                set({ loading: true });
                try {
                    const res = await API.put('/auth/update-profile', profileData);
                    set({ user: res.data.user, error: null });
                } catch (err) {
                    set({ error: err.response?.data?.message || 'Update failed' });
                } finally {
                    set({ loading: false });
                }
            },

            // Check if user is logged in (based on cookie)
            checkAuth: async () => {
                set({ loading: true });
                try {
                    const res = await API.get('/auth/check');
                    set({ user: res.data.user, error: null });
                } catch (err) {
                    set({ user: null, error: err.response?.data?.message || 'Auth check failed' });
                } finally {
                    set({ loading: false });
                }
            },

            // Clear error state
            clearError: () => set({ error: null }),
        }),
        {
            name: 'auth-store',
            partialize: (state) => ({ user: state.user }),
        }
    )
);
