import { useRef } from "react";
import "../assets/css/SliderHome.css";
import { useState } from "react";

export function SliderHome() {
  const imagesPath = [
    "https://static.vecteezy.com/system/resources/thumbnails/004/707/502/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/004/299/815/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    "https://www.shutterstock.com/image-vector/shopping-online-on-phone-podium-260nw-1886650081.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imageWidth = 1080;

  const handleSliderImage = (direction) => {
    let newIndex = currentIndex;

    if (direction === "right") {
      newIndex = currentIndex < imagesPath.length - 1 ? currentIndex + 1 : 0;
    } else if (direction === "left") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : imagesPath.length - 1;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <section className="slider-section">
      <div className="slider-container">
        <div
          onClick={() => handleSliderImage("left")}
          className="slider-button button-left"
        >
          &lt;
        </div>
        <div className="slider-image-container">
          {imagesPath.map((image, index) => {
            return (
              <img
                src={image}
                key={index}
                alt={`slider-${index}`}
                style={{
                  width: `${imageWidth}px`,
                  transform: `translateX(-${currentIndex * imageWidth}px)`,
                  transition: "transform 0.5s ease",
                }}
              />
            );
          })}
        </div>
        <div
          onClick={() => handleSliderImage("right")}
          className="slider-button button-right"
        >
          &gt;
        </div>
      </div>
    </section>
  );
}
