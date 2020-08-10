import styled from 'styled-components'
import { InfoWindow } from '@react-google-maps/api'

export const MapTitle = styled.h3 `
    display: inline-grid;
    font-weight:normal;
	text-align: left;
	padding: 0.75rem 1rem;
	width: 85vw;
	margin: 0;
	margin-top: 1.75rem;
	background: #342b38;
	color: white;
	border-radius: 5px 5px 0 0;
`

export const MapContainer = styled.div `
    display: flex;
	align-items: center;
	justify-content: center;
    margin: 0rem 0 1.5rem 0;
`

export const LocateMe = styled.button `
    position: absolute;
	top: 1.5rem;
	right: 2rem;
	width: 10rem;
	height: 3rem;
	background: white;
	border: 1px solid black;
	border-radius: 4rem;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	font-weight: bold;
	outline: none;
    cursor: pointer;

        img{
            width: 1.5rem;
            margin-right: 0.25rem;
        }
`

export const AddressWindow = styled(InfoWindow).attrs(props=>({
    options:{
    pixelOffset: new window.google.maps.Size(0, -16),
    maxWidth: 200
}
})) `
`