import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Bannar = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleClick}>
      <Carousel.Item>
        <img
          height={570}
          className="d-block w-100 "
          src="https://www.constantc.com/wp-content/uploads/2015/12/on-site-support2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={570}
          className="d-block w-100"
          src="https://5.imimg.com/data5/UJ/UE/VP/SELLER-105366320/server-repair-services-500x500.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={570}
          className="d-block w-100"
          src="https://images.easytechjunkie.com/computer-guy-with-notebook.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Bannar;
