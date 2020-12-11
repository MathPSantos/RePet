import React from 'react';

import { Container } from './styles';

const Outline = ({ 
    nav,
    label,
    onClick,
    ...rest
}) => {
    return(
        <Container nav={nav} onClick={onClick} {...rest}>
            {label}
        </Container>
    )
}

export default Outline;
