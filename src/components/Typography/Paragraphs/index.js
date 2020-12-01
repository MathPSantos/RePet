import React from 'react';

import { Paragraph } from './styles'

const Paragraphs = ({ size, color, children, ...rest }) => {
  return (
    <Paragraph
      size={size}
      color={color}
      {...rest}
    >
      {children}
    </Paragraph>
  );
};

export default Paragraphs;
