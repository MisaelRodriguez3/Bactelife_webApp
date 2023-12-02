import React from 'react';
import './NotFound.css'; 

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="ErrorTitles">Error 404 - Page not found</h1>
      <p className='ErrorText'>Sorry, the page you are looking for is not available.</p>
    </div>
  );
};

export default NotFound;
