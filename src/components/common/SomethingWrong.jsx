import React from 'react';
import { useNavigate } from 'react-router-dom';

const SomethingWrong = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <h2>Something went wrong</h2>
      <p>Sorry, something went wrong, please try again!</p>
      <button className="home-button" onClick={goHome}>
        Try again
      </button>
    </div>
  );
};

export default SomethingWrong;
