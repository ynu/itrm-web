import React, { Component } from 'react';

const DynamicButton = ({button, show, ...other}) => (
  show(other.record) ?  React.cloneElement(button, other): null
);

export default DynamicButton;
