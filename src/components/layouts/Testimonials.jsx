import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../../api/endpoints.js';
import { getApi } from '../../api/index.js';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getApi(endpoints.GET_TESTIONIALS).then((response) => {
      const resp = response.data;
      if (resp.statusCode === 200) {
        setTestimonials(resp.testimonials);
      } else {
        navigate('/something-went-wrong');
      }
    }).catch((error) => {
      console.error('Error during API calls:', error);
      navigate('/something-went-wrong');
    });
  }, [navigate]);

  // Start the carousel only when testimonials are fetched
  useEffect(() => {
    if (testimonials.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);

      return () => clearInterval(intervalId);
    }
  }, [testimonials]);

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
              <span>{testimonials[currentIndex]?.text}</span>
            </p>
            <p className="author-name">{testimonials[currentIndex]?.author}</p>
            <p className="author-role">{testimonials[currentIndex]?.role}</p>
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
