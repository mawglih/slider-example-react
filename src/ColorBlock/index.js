import React from 'react';

const ColorBlock = ({
  r,
  g,
  b,
}) => (
  <div
    style={{ width: '500px', height: '100px', backgroundColor:`rgb(${r}, ${g}, ${b})`}}
  />
);

export default ColorBlock;
