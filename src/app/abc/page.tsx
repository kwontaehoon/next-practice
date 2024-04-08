'use client'
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {Scrollbar} from 'smooth-scrollbar-react';

const Bottom = styled.div`
  height: 200vh;
`;

export default function ScrollToTop() {

  return (
    <Bottom>
      <div style={{maxHeight: '250px', width: '100%', display: 'flex'}}>
      <Scrollbar
        className="custom-class"
        alwaysShowTracks
        plugins={{
          overscroll: {
            effect: "glow"
          } as const
        }}
      >
        <div className="sample-container-2" style={{ maxHeight: 250 }}>
          {[...Array(40).keys()].map((value, index) => (
            <div key={index}>{value + index}</div>
          ))}
        </div>
      </Scrollbar>
      </div>
    </Bottom>
  );
}
