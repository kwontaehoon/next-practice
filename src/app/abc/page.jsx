'use client'
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Bottom = styled.div`
  height: 200vh;
`;

export default function ScrollToTop() {
  const beforeScrollY = useRef(window.scrollY);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > beforeScrollY.current ? "down" : "up";
    beforeScrollY.current = currentScrollY;

    scrollTo(direction);
  };

  const scrollTo = (direction) => {
    if (direction === "down") {
      window.scrollTo({
        top: window.scrollY + 200,
        behavior: "smooth",
      });
    } else if (direction === "up") {
      window.scrollTo({
        top: window.scrollY - 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <Bottom>
      <div>
        <h3 onClick={handleScroll}>Go up!</h3>
      </div>
    </Bottom>
  );
}
