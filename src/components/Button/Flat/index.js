import React from 'react';

import { Container } from './styles';

const Flat = ({ 
    label,
    onClick,
    ...rest
}) => {
    return(
        <Container onClick={onClick} {...rest}>
            {label}
        </Container>
    )
}

export default Flat;
