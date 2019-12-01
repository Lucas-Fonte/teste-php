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
    max-height: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    align-items: center;
    padding: 20px;
    border-radius: 8px;

    h1 {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    form {
        display: flex;
        align-items: center;
        width: 100%;
        flex-direction: column;
        margin-top: 5px;

        input {
            background: rgba(0, 0, 0, 0.6);
            border: 0;
            width: 100%;
            border-radius: 4px;
            height: 38px;
            padding: 0 10px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        button {
            margin-top: 4px;
            width: 200px;
            height: 38px;
            background: #f05053;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.05, '#f05053')};
            }
        }
    }
`;

export const User = styled.div`
    margin-right: 10px;
`;
export const Address = styled.div`
    margin-right: 10px;
`;
export const Company = styled.div`
    margin-right: 10px;
`;

export const FormContent = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 696px) {
        flex-direction: column;
    }
`;
