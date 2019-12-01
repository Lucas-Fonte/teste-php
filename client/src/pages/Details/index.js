/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import axios from 'axios';
import api from '../../services/api';

import { Container, Content, Post } from './styles';

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
                <h1>Posts do usuário {match.params.id}</h1>
                <ul>
                    {posts.map(post => (
                        <Post key={post.title + Math.random()}>
                            <strong>{post.title}</strong>
                            <span>{post.body}</span>
                        </Post>
                    ))}
                </ul>
            </Content>
        </Container>
    );
}

Details.propTypes = {
    match: PropTypes.object.isRequired
};
