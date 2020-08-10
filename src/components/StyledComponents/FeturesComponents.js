import styled from 'styled-components'

export const Circle = styled.div `
    color: #fff;
    background: ${props=> props.color};
    border-radius: 50%;
    margin: 20px 3.7rem;
    text-align: center;
    cursor: default;
    height: 20rem;
    width: 20rem;
    padding:1rem;

    p{
        color:${props => props.color};
    }
`