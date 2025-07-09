import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'Lax', // or 'None' with `secure: true` if cross-origin
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

// ==========================
// Signup Controller
// ========================== 
export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: 'All fields are required.' });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ message: 'Email already in use.' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '10d',
    });

    res
      .cookie('token', token, cookieOptions)
      .status(201)
      .json({
        message: 'User registered and logged in successfully',
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      });
  } catch (error) {
    console.error('Signup error:', error.message);
    res.status(500).json({ message: 'Server error during signup.' });
  }
};

 
// ==========================
// Login Controller
// ==========================
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: 'All fields are required.' });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: 'Invalid credentials.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid credentials.' });

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // ✅ Set cookie with token
    res
      .cookie('token', token, cookieOptions)
      .status(200)
      .json({
        message: 'Login successful',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        }
      });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Server error during login.' });
  }
};

// ==========================
// Logout Controller
// ==========================
export const logoutUser = (req, res) => {
  try {
    res.clearCookie('token', cookieOptions);
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Logout error:', error.message);
    res.status(500).json({ message: 'Server error during logout.' });
  }
};

// ==========================
// Check Auth Controller
// ==========================
export const getCurrentUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    res.status(200).json({ user: req.user });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// ==========================
// Update Profile Controller
// ==========================
export const updateProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const { name, headline, biography, language, links } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        ...(name && { name }),
        ...(headline && { headline }),
        ...(biography && { biography }),
        ...(language && { language }),
        ...(links && { links }),
      },
      { new: true, runValidators: true }
    ).select('-password');

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
