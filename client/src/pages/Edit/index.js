/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Form, Input, Scope } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import api from '../../services/api';
import {
    Container,
    Content,
    User,
    Address,
    Company,
    FormContent
} from './styles';

export default function Edit({ match }) {
    const [currentUser, setCurrentUser] = useState('');

    async function loadCurrentUser(id) {
        const response = await api.get(`users/${id}`);
        const { data } = response;

        setCurrentUser(data);
    }

    useEffect(() => {
        loadCurrentUser(match.params.id);
    }, []);

    async function handleUpdateUser(data) {
        const response = await api.put(`users/${match.params.id}`, data);
        if (response) {
            toast.success('Usuário atualizado');
        }
    }
    return (
        <Container>
            <Content>
                <h1>Dados do usuário {match.params.id}</h1>
                <Form initialData={currentUser} onSubmit={handleUpdateUser}>
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

Edit.propTypes = {
    match: PropTypes.object.isRequired
};
