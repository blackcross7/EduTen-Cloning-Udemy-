import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
      match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
        'Password must contain upper, lower, number',
      ],
    },

    // Profile Fields
    headline: {
      type: String,
      maxlength: 60,
      trim: true,
      default: '',
    },
    biography: {
      type: String,
      maxlength: 1000,
      trim: true,
      default: '',
    },
    language: {
      type: String,
      default: 'English (US)',
    },

    // Social Links
    links: {
      website: { type: String, trim: true },
      facebook: { type: String, trim: true },
      instagram: { type: String, trim: true },
      linkedin: { type: String, trim: true },
      tiktok: { type: String, trim: true },
      x: { type: String, trim: true },
      youtube: { type: String, trim: true },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
