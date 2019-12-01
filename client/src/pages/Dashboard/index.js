import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Container, Content, Card, UserInfo, UserButtons } from './styles';

export default function Dashboard() {
    const [users, setUsers] = useState([]);

    async function loadUsers() {
        const response = await api.get('users');
        const { data } = response;

        setUsers(data);
    }

    async function handleDelete(id) {
        await api.delete(`users/${id}`);
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <Container>
            <Content>
                <h1>Dashboard</h1>
                <ul>
                    {users.map(user => (
                        <Card key={user.name + Math.random()}>
                            <UserInfo>
                                <strong>{user.id}</strong>
                                <span>{user.name}</span>
                            </UserInfo>

                            <aside>
                                <UserButtons>
                                    <h1>t</h1>
                                    <h1>t</h1>
                                </UserButtons>
                            </aside>
                        </Card>
                    ))}
                </ul>
            </Content>
        </Container>
    );
}
