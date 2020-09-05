import styled from 'styled-components'
import { InfoWindow } from '@react-google-maps/api'
import { device } from '../Data/Constants'

export const mapContainerStyle = {
	height : '75vh',
	width : '85vw',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: 'auto',
	marginBottom: '1.5rem',
}

export const MapTitle = styled.h3 `
	width: 85vw;
	font-size: 1em;
	padding: 0.3em 0;
    font-weight: normal;
	text-align: center;
	margin: auto;
	margin-top: 1.75em;
	background: #342b38;
	color: white;
	border-radius: 5px 5px 0 0;

	@media ${device.tablet}{
		font-size: 1.05em;
	}

	@media ${device.laptopS}{
		font-size: 1.1em;
		padding: 0.5em 0;
	}

	@media ${device.laptopL}{
		font-size: 1.2em;
	}

	@media ${device.desktop}{
		font-size: 1.25em;
	}
`

export const LocateMe = styled.button `
    position: absolute;
	top: 1em;
	right: 1em;
	width: 8em;
	height: 2.5em;
	padding: 1.5em;
	font-size: 0.8em;
	white-space: nowrap;
	background: white;
	border: 1px solid black;
	border-radius: 4rem;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	outline: none;
    cursor: pointer;

	@media ${device.tablet}{
		font-size: 0.85em;
	}

	@media ${device.laptopS}{
		font-size: 0.9em;
	}

	@media ${device.laptopL}{
		font-size: 1em;
	}

	@media ${device.desktop}{
		font-size: 1.05em;
	}

	/* pin */
	img{
		width: 1em;
		margin-right: 0.25rem;

		@media ${device.laptopS}{
			width: 1.15em;
		}

		@media ${device.laptopL}{
			width: 1.2em;
		}

		@media ${device.desktop}{
			width: 1.25em;
		}
	}
`

export const AddressWindow = styled(InfoWindow).attrs(props=>({
    options:{
    pixelOffset: new window.google.maps.Size(0, -16),
    maxWidth: 200
}
})) `
`