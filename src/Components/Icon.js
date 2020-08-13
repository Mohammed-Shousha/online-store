import styled from 'styled-components'

const Icon = styled.img `
    width: 190px;
	margin-right:${props => props.alt === 'cart' ? '55px' : ''};
`

export default Icon