import React, { useState, useEffect } from 'react';
import { Form, Input, Scope } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Container, Content } from './styles';

const schema = Yup.object().shape({
    product: Yup.string().required('Name is required'),
    product_detail: Yup.string().required('Detail is required'),
    rating: Yup.number()
});
export default function Dashboard() {
    const [users, setUsers] = useState([]);

    async function loadUsers() {
        const response = await api.get('users');
        const { data } = response;

        setUsers(data);
    }

    async function handleNewSubmit() {}

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <Container>
            <Content>
                <h1>Dashboard</h1>
                <Form schema={schema} onSubmit={handleNewSubmit}>
                    <Input name="name" type="string" placeholder="name" />
                    <Input
                        name="username"
                        type="string"
                        placeholder="username"
                    />
                    <Input name="email" type="string" placeholder="email" />
                    <Scope path="address">
                        <Input
                            name="street"
                            type="string"
                            placeholder="street"
                        />
                        <Input name="suite" type="string" placeholder="suite" />
                        <Input name="city" type="string" placeholder="city" />
                        <Input
                            name="zipcode"
                            type="string"
                            placeholder="zipcode"
                        />
                        <Scope path="geo">
                            <Input name="lat" type="string" placeholder="lat" />
                            <Input name="lng" type="string" placeholder="lng" />
                        </Scope>
                    </Scope>
                    <Input name="phone" type="string" placeholder="phone" />
                    <Input name="website" type="string" placeholder="website" />
                    <Scope path="company">
                        <Input
                            name="name"
                            type="string"
                            placeholder="Company Name"
                        />
                        <Input
                            name="catchPhrase"
                            type="string"
                            placeholder="catchPhrase"
                        />
                        <Input name="bs" type="string" placeholder="bs" />
                    </Scope>
                    <button type="submit">Criar</button>
                </Form>
                <ul>
                    {users.map(user => (
                        <li>{user.name}</li>
                    ))}
                </ul>
            </Content>
        </Container>
    );
}
