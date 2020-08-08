import styled from 'styled-components'

const FormButton = styled.button.attrs(props => ({
    type: props.type || 'submit',

}))`
    border-radius: 20px;
    border: none;
    background-color: ${props => props.grey ? '#342b38':'#4bb1bd'};
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    cursor: pointer;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    margin: 0px 5px 5px;
    outline: none;
    &:active{
        transform: scale(0.95);
    }
`

export default FormButton