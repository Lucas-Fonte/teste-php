import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 20px;
`;

export const Content = styled.div`
    overflow: auto;
    max-width: 1000px;
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    align-items: center;
    padding: 20px;
    border-radius: 8px;

    ul {
        width: 100%;
        margin-top: 40px;
    }
`;

export const Card = styled.li`
    height: 52px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    aside {
        display: flex;
        align-items: center;
    }
`;

export const UserButtons = styled.div`
    display: flex;
    flex-direction: row;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;

    strong {
        margin-right: 10px;
    }
`;
