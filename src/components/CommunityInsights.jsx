import React from 'react';
import "./navbar.css"

const testimonials = [
  {
    name: 'Nadeem',
    rating: 5,
    feedback:
      'The schedule on the scheduler is clear, well-organized, and made planning incredibly easy!',
  },
  {
    name: 'John Doe',
    rating: 4,
    feedback:
      'The platform is user-friendly, and I could manage everything without any hassle!',
  },
  {
    name: 'Jane Smith',
    rating: 5,
    feedback:
      'Excellent interface, smooth scheduling, and a very helpful support team!',
  },
  {
    name: 'Alice Johnson',
    rating: 4,
    feedback:
      'I like the way the insights are provided, they help me plan my work better!',
  },
  {
    name: 'Nadeem',
    rating: 5,
    feedback:
      'The schedule on the scheduler is clear, well-organized, and made planning incredibly easy!',
  },
  {
    name: 'John Doe',
    rating: 4,
    feedback:
      'The platform is user-friendly, and I could manage everything without any hassle!',
  },
  {
    name: 'Jane Smith',
    rating: 5,
    feedback:
      'Excellent interface, smooth scheduling, and a very helpful support team!',
  },
  {
    name: 'Alice Johnson',
    rating: 4,
    feedback:
      'I like the way the insights are provided, they help me plan my work better!',
  },
];

const CommunityInsights = () => {
  return (
    <div className="bg-gray-100 p-10">
      <h1 className="heading text-center text-3xl font-bold mt-8 mb-10">Community Insights</h1>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide mb-10">
        <div className="inline-flex space-x-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-6 w-[300px] inline-block mb-4"
            >
              <h2 className="heading font-bold text-lg">{testimonial.name}</h2>
              <div className="flex items-center mb-2">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
              </div>
              <p className="text-sm form text-wrap">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityInsights;
