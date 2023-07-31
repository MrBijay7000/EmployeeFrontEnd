import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
  const images = [
    {
      url: "https://st.depositphotos.com/1002881/1285/i/950/depositphotos_12859789-stock-photo-admin-tag.jpg",
      alt: "Image 1",
    },
    {
      url: "https://www.proofhub.com/articles/wp-content/uploads/2021/08/Employee-Management-System-Apps.png",
      alt: "Image 2",
    },
    {
      url: "https://empmonitor.com/blog/wp-content/uploads/2020/04/Importance-Of-Employee-Management-System.png",
      alt: "Image 3",
    },
  ];

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showStatus={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
