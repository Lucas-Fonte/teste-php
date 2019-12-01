import React, { useState, useEffect } from 'react';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import api from '../../services/api';

import {
    Container,
    Content,
    Card,
    UserInfo,
    UserButtons,
    Title,
    List
} from './styles';

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    const [action, setAction] = useState(0);

    async function loadUsers() {
        const response = await api.get('users');
        const { data } = response;

        setUsers(data);
    }

    async function handleDelete(id) {
        await api.delete(`users/${id}`);
        toast.error(`Usuário ${id} deletado`);
        setAction(action + 1);
    }

    async function handleTestUsers() {
        if (users.length === 0) {
            const testUsers = await axios.get(
                'http://jsonplaceholder.typicode.com/users'
            );

            const testPosts = await axios.get(
                'http://jsonplaceholder.typicode.com/posts'
            );

            const response = {
                users: testUsers.data,
                posts: testPosts.data
            };

            await response.users.map(userData => {
                const thisUser = api.post('users', userData);
                return thisUser;
            });

            await response.posts.map(postData => {
                const thisPost = api.post(
                    `users/${postData.userId}/posts`,
                    postData
                );
                return thisPost;
            });

            if (response) {
                toast.success('Usuários de teste cadastrados');
            }
            setAction(action + 1);
        } else {
            toast.warn('Usuários de teste já foram cadastrados');
        }
    }

    useEffect(() => {
        loadUsers();
    }, [action]);

    return (
        <Container>
            <Content>
                <Title>
                    <h1>Dashboard</h1>
                    <aside>
                        <div onClick={handleTestUsers}>
                            Cadastrar usuários para teste
                        </div>
                    </aside>
                </Title>

                <List>
                    <ul>
                        {users.map(user => (
                            <Card key={user.name + Math.random()}>
                                <UserInfo>
                                    <strong>{user.id}</strong>
                                    <Link to={`details/${user.id}`}>
                                        <span>{user.name}</span>
                                    </Link>
                                </UserInfo>

                                <aside>
                                    <UserButtons>
                                        <Link to={`edit/${user.id}`}>
                                            <MdModeEdit className="edit" />
                                        </Link>
                                        <MdDeleteForever
                                            className="delete"
                                            onClick={() =>
                                                handleDelete(user.id)
                                            }
                                        />
                                    </UserButtons>
                                </aside>
                            </Card>
                        ))}
                    </ul>
                </List>
            </Content>
        </Container>
    );
}
