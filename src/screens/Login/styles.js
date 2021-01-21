import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: -8px;
    display: flex;
    background-color: var(--second);
    `

export const Card = styled.div`
    margin: auto;
    padding: 1rem 2rem;
    border-radius: 15px;
    background-color: var(--white);
`

export const Input = styled.input`
    margin: .5rem 0;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,.4);
    transition: .2s all ease-in;
    &:hover{
        border-color: var(--primary);
    }
`

export const Button = styled.button`
    border: none;
    padding: 7px 25px;
    border-radius: 5px;
    color: var(--white);
    background-color: var(--primary);
    margin-top: 2rem;
    transition: .2s all ease-in;
    &:hover{
        background-color: transparent;
        color: var(--primary);
        transform: scale(1.1);
        border: 1px solid var(--primary);
    }
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
`

export const Text = styled.p`
    font-size: 2rem;
    text-align: center;
`