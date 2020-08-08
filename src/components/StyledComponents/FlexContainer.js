import styled from 'styled-components'

const FlexContainer = styled.div`
    display:flex;
    justify-content:${props => props.around ? 'space-around' : props.end? 'flex-end':''};
`

export default FlexContainer