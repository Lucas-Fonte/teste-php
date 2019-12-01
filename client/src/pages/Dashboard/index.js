import React, { useState, useEffect } from 'react';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
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
        // await api.delete(`users/${id}`);
        toast.error(`Usuário ${id} deletado`);
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
                                        onClick={() => handleDelete(user.id)}
                                    />
                                </UserButtons>
                            </aside>
                        </Card>
                    ))}
                </ul>
            </Content>
        </Container>
    );
}
