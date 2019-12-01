import React from 'react';
import { Form, Input, Scope } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import api from '../../services/api';
import {
    Container,
    Content,
    User,
    Address,
    Company,
    FormContent
} from './styles';

export default function Dashboard() {
    async function handleNewUser(data) {
        const response = await api.post('users', data);
        if (response) {
            toast.success('Usuário atualizado');
        }
    }
    return (
        <Container>
            <Content>
                <h1>Editar</h1>
                <Form onSubmit={handleNewUser}>
                    <FormContent>
                        <User>
                            <h1>Usuário</h1>
                            <Input
                                name="name"
                                type="string"
                                placeholder="name"
                            />
                            <Input
                                name="username"
                                type="string"
                                placeholder="username"
                            />
                            <Input
                                name="email"
                                type="string"
                                placeholder="email"
                            />
                            <Input
                                name="phone"
                                type="string"
                                placeholder="phone"
                            />
                            <Input
                                name="website"
                                type="string"
                                placeholder="website"
                            />
                        </User>
                        <Address>
                            <h1>Endereço</h1>
                            <Scope path="address">
                                <Input
                                    name="street"
                                    type="string"
                                    placeholder="street"
                                />
                                <Input
                                    name="suite"
                                    type="string"
                                    placeholder="suite"
                                />
                                <Input
                                    name="city"
                                    type="string"
                                    placeholder="city"
                                />
                                <Input
                                    name="zipcode"
                                    type="string"
                                    placeholder="zipcode"
                                />
                                <Scope path="geo">
                                    <Input
                                        name="lat"
                                        type="string"
                                        placeholder="lat"
                                    />
                                    <Input
                                        name="lng"
                                        type="string"
                                        placeholder="lng"
                                    />
                                </Scope>
                            </Scope>
                        </Address>
                        <Company>
                            <h1>Empresa</h1>
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
                                <Input
                                    name="bs"
                                    type="string"
                                    placeholder="bs"
                                />
                            </Scope>
                        </Company>
                    </FormContent>

                    <button type="submit">Criar</button>
                </Form>
            </Content>
        </Container>
    );
}
