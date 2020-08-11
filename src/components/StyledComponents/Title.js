import styled from 'styled-components'

const Title = styled.h1 `
    margin-left: 3rem;
    text-align: left;
    font-size:${props => props.h1 ? '2em': props.h2? '1.5em': props.h3? '1.17em':'1em'}
`

export default Title
