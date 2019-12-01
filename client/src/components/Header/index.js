import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Logo, NewUser } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/dashboard">
                        <Logo>
                            <h1>This is a company.</h1>
                        </Logo>
                    </Link>
                </nav>

                <aside>
                    <Link to="/dashboard">
                        <h1>Users</h1>
                    </Link>
                    <NewUser>
                        <div>
                            <Link to="/new">Create new user</Link>
                        </div>
                    </NewUser>
                </aside>
            </Content>
        </Container>
    );
}
