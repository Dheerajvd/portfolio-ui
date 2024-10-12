import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: 'The design quality, flexibility, documentation, and support are all absolutely excellent. I buy the Avada theme for all my clients, knowing that whatever they require, Avada will be able to deliver.',
    author: 'Josef Sharon',
    role: 'CEO, Omisoft',
  },
  {
    text: 'Avada is a lifesaver. I build all my client sites with it and the support is second to none. Highly recommended!',
    author: 'Sarah Lee',
    role: 'Freelancer',
  },
  {
    text: 'The flexibility and features that Avada provides is second to none. It’s my go-to solution for all my projects.',
    author: 'Michael Chan',
    role: 'Founder, ChanCorp',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="contents-page">
      <div className="contents-header">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonial-carousel-container">
        <div className="testimonial-content">
          <p className="testimonial-title">What my colleagues say about me</p>
          <div className="testimonial-text">
            <div className="testimonial-line"></div>
            <p>
              <span>{testimonials[currentIndex].text}</span>
            </p>
            <p className="author-name">{testimonials[currentIndex].author}</p>
            <p className="author-role">{testimonials[currentIndex].role}</p>
          </div>
        </div>
        <div className="dots-container">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
