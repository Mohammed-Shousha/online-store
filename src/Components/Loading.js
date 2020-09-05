import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const Loading = styled.div`
    display: inline-block;
    margin: 30vh 46vw;
    &:after{
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin:8px;
        border-radius: 50%;
        border: 6px solid black;
        border-color: black transparent black transparent;
        animation: ${rotate} 1.2s linear infinite;
    }
`

export default Loading