import React from 'react';

import { Heading } from './styles'

const Headings = ({ size, color, children, ...rest }) => {
  return (
    <Heading
      size={size}
      color={color}
      {...rest}
    >
      {children}
    </Heading>
  );
};

export default Headings;
