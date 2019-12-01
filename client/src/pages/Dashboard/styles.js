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
    border-bottom: 1px solid rgba(171, 171, 171, 0.4);

    aside {
        display: flex;
        align-items: center;
    }
`;

export const UserButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50px;
    margin-right: 20px;

    .edit {
        color: rgba(171, 171, 171, 0.8);
        font-size: 18px;
        cursor: pointer;

        :hover {
            color: #000;
        }
    }

    .delete {
        color: rgba(171, 171, 171, 0.8);
        font-size: 18px;
        cursor: pointer;

        :hover {
            color: #000;
        }
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    strong {
        margin-right: 10px;
    }

    span {
        color: rgba(0, 0, 0, 0.7);
        font-size: 18px;
        cursor: pointer;

        :hover {
            color: #000;
        }
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    div {
        max-width: 80px;
        padding: 5px;
        background: #f05053;
        border-radius: 4px;
        color: #fff;
        display: flex;
        justify-content: center;
        text-align: center;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background: ${darken(0.05, '#f05053')};
        }
    }
`;

export const List = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: auto;
`;
