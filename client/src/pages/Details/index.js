import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Details({ match }) {
    return (
        <Container>
            <h1>Details {match.params.id}</h1>
        </Container>
    );
}

Details.propTypes = {
    match: PropTypes.number.isRequired
};
