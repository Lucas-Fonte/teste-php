/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import { Container, Content } from './styles';

export default function Details({ match }) {
    const [posts, setPosts] = useState([]);

    async function loadPosts() {
        const response = await api.get(`users/${match.params.id}/posts`);
        const { data } = response;

        if (data.length === 0) {
            setPosts([{ title: 'No posts avaliable' }]);
        } else {
            setPosts(data);
        }
    }

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <Container>
            <Content>
                <h1>Details {match.params.id}</h1>
                <ul>
                    {posts.map(post => (
                        <li>{post.title}</li>
                    ))}
                </ul>
            </Content>
        </Container>
    );
}

Details.propTypes = {
    match: PropTypes.object.isRequired
};
