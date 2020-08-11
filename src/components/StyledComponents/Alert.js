import styled from 'styled-components'

const Alert = styled.div `
    position: fixed;
	top: 0.5rem;
	right: 0;
	left: 0;
	z-index: 69;
	margin: auto;
	background: #ecf0f1;
	border:1px solid #cf1b1b ;
	border-radius: 3px;
	max-width: 400px;
    line-height: 2rem;
    
    img {
        width: 1rem;
        position: absolute;
        right: 0;
        margin: 0.25rem;
    }
`

export default Alert