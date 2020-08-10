import styled from 'styled-components'

const FlexContainer = styled.div`
    display:flex;
    justify-content:${props => props.around ? 'space-around' : props.end? 'flex-end':'center'};
    align-items:center;
    margin: ${props => props.margin};

    @media (max-width: 1150px) {
        flex-direction: ${props => props.responsive ? 'column':'row'};
    }
`

export default FlexContainer