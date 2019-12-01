import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    background: linear-gradient(to top, #fc4a1a, #f7b733);
    padding: 20px;
`;

export const Content = styled.div`
    overflow: auto;
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: #fff;
    border-radius: 8px;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 5px;

        input {
            background: rgba(0, 0, 0, 0.6);
            border: 0;
            border-radius: 4px;
            height: 38px;
            padding: 0 10px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        textarea {
            background: rgba(0, 0, 0, 0.6);
            border: 0;
            border-radius: 4px;
            height: 60px;
            padding: 10px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        span {
            color: #0095ff;
            font-size: 12px;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            margin-top: 4px;
            height: 38px;
            background: #0095ff;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.05, '#0095ff')};
            }
        }
    }

    ul {
        margin-top: 40px;
    }
`;
