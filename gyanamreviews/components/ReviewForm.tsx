"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a production environment, you would POST this data to your database here.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-black text-white p-8 rounded-2xl text-center border-t-4 border-orange-500">
        <h3 className="text-2xl font-bold mb-2">Thank you for your review!</h3>
        <p className="text-gray-300">Your feedback helps us remain the most trusted education platform in Noida.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-orange-500 font-semibold hover:text-orange-400"
        >
          Submit another review
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-extrabold text-black mb-6">Share Your Gyanam Experience</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 mb-2">Overall Rating</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="focus:outline-none transition-transform hover:scale-110"
            >
              <Star 
                className={`w-8 h-8 ${
                  star <= (hoveredRating || rating) 
                    ? "fill-orange-500 text-orange-500" 
                    : "fill-gray-200 text-gray-200"
                }`} 
              />
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
          <input 
            type="text" 
            id="name" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
            placeholder="E.g. Rahul Sharma"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-bold text-gray-700 mb-2">Role / Course</label>
          <input 
            type="text" 
            id="role" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
            placeholder="E.g. JEE Aspirant or Parent"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="title" className="block text-sm font-bold text-gray-700 mb-2">Review Title</label>
        <input 
          type="text" 
          id="title" 
          required 
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
          placeholder="Summarize your experience"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="review" className="block text-sm font-bold text-gray-700 mb-2">Detailed Review</label>
        <textarea 
          id="review" 
          required 
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
          placeholder="Tell us about the tutors, the curriculum, and how Gyanam helped you achieve your goals in Noida..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
      >
        Submit Verified Review
      </button>
    </form>
  );
}