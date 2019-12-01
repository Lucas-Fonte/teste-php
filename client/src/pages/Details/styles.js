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
        overflow: auto;
        height: 100%;
        width: 100%;
        margin-top: 40px;
    }
`;

export const Post = styled.li`
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: left;
    border-bottom: 1px solid rgba(171, 171, 171, 0.4);

    strong {
        font-size: 20px;
    }

    span {
        margin-bottom: 10px;
    }
`;
