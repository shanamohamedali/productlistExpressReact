import React, { useState } from "react";
import "../ProductImgGallery/ProductImgGallery.css";

export function ProductImgGallery({images, title}) {
  console.log("===images",images)
  const [currentImage, setCurrentimage] = useState(images[0]);

  return (
    <div>
      <div className="main-image-section">
        <img src={currentImage} alt={title} height={400} width={500} />
      </div>
      <div className="gallery-section">
     
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => setCurrentimage(image)}
          />
        ))}
      </div>
    </div>
  );
}
