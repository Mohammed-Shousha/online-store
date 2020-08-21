import styled from 'styled-components'

const FlexContainer = styled.div`
    &&{
        display:flex;
        justify-content:${props => 
        props.around ? 'space-around' 
        :props.flexEnd? 'flex-end'
        :props.center? 'center'
        :props.between? 'space-between'
        :props.start? 'flex-start':''};
        margin: ${props => props.margin};
        align-items:${props => props.noAlign ? 'none':'center'};
        
        @media (max-width: 1150px) {
            flex-direction: ${props => props.responsive ? 'column':'row'};
        }
    }
`

export default FlexContainer