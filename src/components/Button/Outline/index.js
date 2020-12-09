import React from 'react';

import { Container } from './styles';

const Outline = ({ 
    to,
    label,
    onClick,
    ...rest
}) => {
    return(
        <Container onClick={onClick} to={to} {...rest}>
            {label}
        </Container>
    )
}

export default Outline;
