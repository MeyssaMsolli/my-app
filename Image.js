import React, { useState, useEffect } from 'react';

function Image({ imageUrls }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 1000); // Change the image every 1 second

    return () => clearInterval(intervalId);
  }, [imageUrls.length]);

  return (
    <div className="image-container">
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Product ${index + 1}`}
          style={{ display: index === currentImageIndex ? 'block' : 'none' }} />
      ))}
    </div>
  );
}

export default Image;