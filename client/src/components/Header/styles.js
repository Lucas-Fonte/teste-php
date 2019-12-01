import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    background: #000;
    @media only screen and (max-width: 696px) {
        padding-top: 20px;
    }
`;

export const Content = styled.div`
    height: 52px;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: #fff;
    }

    nav {
        display: flex;
        align-items: center;
    }

    aside {
        display: flex;
        align-items: center;

        h1 {
            display: block;
            color: #fff;

            @media only screen and (max-width: 696px) {
                display: none;
            }
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    h1 {
        margin-left: 5px;
    }
`;

export const NewUser = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.3);

    div {
        text-align: right;
        margin-right: 10px;

        a {
            display: block;
            margin-top: 2px;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.6);

            :hover {
                color: #fff;
            }
        }
    }
`;
