import React, { useRef, useState } from 'react'
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
// import Geocode from "react-geocode"
import Loading from '../../Components/Loading'
import { MapTitle, MapContainer, LocateMe, AddressWindow } from '../../Components/MapComponents'
import { GoogleMapsKey } from '../../Data/Constants'
import pin from '../../Data/Icons/pin.svg'
import pin2 from '../../Data/Icons/pin2.svg'

const mapContainerStyle = {
	height: "80vh",
	width: "85vw",
}

const center = {
	lat: 26.8,
	lng: 30.8,
}

const options = {
	disableDefaultUI: true,
	zoomControl: true,
	clickableIcons: false
}


const GMap = ({ marker, setMarker }) => {

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: GoogleMapsKey
	})

	const mapRef = useRef()
	const onMapLoad = React.useCallback((map) => {
		mapRef.current = map
	}, [])

	const [selected, setSelected] = useState(null)

	const onMapClick = (e) => {
		setMarker({
			lat: e.latLng.lat(),
			lng: e.latLng.lng()
		})

		setSelected({
			lat: e.latLng.lat(),
			lng: e.latLng.lng()
		})
	}

	const panTo = React.useCallback(({ lat, lng }) => {
		mapRef.current.panTo({ lat, lng })
		mapRef.current.setZoom(16)
	}, [])

	const Locate = () => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				setMarker({
					lat: coords.latitude,
					lng: coords.longitude
				})

				setSelected({
					lat: coords.latitude,
					lng: coords.longitude
				})

				panTo({
					lat: coords.latitude,
					lng: coords.longitude
				})
			},
			(error) => console.error(error)
		)
	}

	// const toAddress=() =>{
	// 	Geocode.setApiKey('AIzaSyAec45bB1-bXR0LZ7ac3C72I_eurXDcins')
	// 	Geocode.fromLatLng(marker.lat, marker.lng).then(
	// 	  res => {
	//     	const address = res.results[0].formatted_address
	// 	    console.log(address)
	// 	},
	// 	  error => {
	// 	    console.error(error)
	// 	}
	// )}


	if (loadError) return 'ERROR !!'
	if (!isLoaded) return <Loading />

	return (
		<>
			<MapTitle> Add New Address </MapTitle>
			<MapContainer>
				<GoogleMap
					mapContainerStyle={mapContainerStyle}
					zoom={6.15}
					center={center}
					options={options}
					onClick={onMapClick}
					onLoad={onMapLoad}
				>
					<LocateMe onClick={Locate}>
						<img src={pin} alt='pin' />
						Locate Me
					</LocateMe>
					<Marker
						position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
						animation={window.google.maps.Animation.DROP}
						icon={{
							url: pin2,
							origin: new window.google.maps.Point(0, 0),
							anchor: new window.google.maps.Point(15, 15),
							scaledSize: new window.google.maps.Size(30, 30),
						}}
						onClick={() => setSelected(marker)}
					/>
					{selected &&
						<AddressWindow
							position={{ lat: selected.lat, lng: selected.lng }}
							onCloseClick={() => setSelected(null)}
						>
							<div>
								<h3> Address </h3>
								<p style={{ 'color': '#636363' }}> address details </p>
							</div>
						</AddressWindow>
					}
				</GoogleMap>
			</MapContainer>
		</>
	)
}

export default GMap