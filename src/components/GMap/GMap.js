import React, {useRef, Fragment} from 'react'
import { GoogleMap, Marker, useLoadScript} from "@react-google-maps/api"
import Geocode from "react-geocode"
import './GMap.css'
import pin from '../Icons/pin.svg'
import Loading from '../Loading/Loading'


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
}


const GMap =({marker, setMarker})=>{

	const {isLoaded, loadError} =useLoadScript({
		googleMapsApiKey : 'AIzaSyAec45bB1-bXR0LZ7ac3C72I_eurXDcins'

	})

	const mapRef = useRef()
  	const onMapLoad = React.useCallback((map) => {
   		mapRef.current = map
  	}, [])

  	const onMapClick =(e)=> {
	    setMarker({
	        lat: e.latLng.lat(),
	        lng: e.latLng.lng(),
	    })
	}

    const panTo = React.useCallback(({ lat, lng }) => {
	    mapRef.current.panTo({ lat, lng })
	    mapRef.current.setZoom(13.5)
  	}, [])

	const Locate =()=>{
		navigator.geolocation.getCurrentPosition(
          ({coords}) => {
            setMarker({
          		lat: coords.latitude,
          		lng: coords.longitude,
        	})
	        panTo({
	        	lat: coords.latitude,
	            lng: coords.longitude,
	        })
          },
          (error) => console.error(error)
        )
    }

	// const toAddress=(lat, lng) =>{
	// 	Geocode.setApiKey('AIzaSyAec45bB1-bXR0LZ7ac3C72I_eurXDcins')
	// 	Geocode.fromLatLng(26.8, 30.8).then(
	// 	  res => {
	//     	const address = res.results[0].formatted_address
	// 	    console.log(address)
	// 	},
	// 	  error => {
	// 	    console.error(error)
	// 	}
	// )}


	if(loadError) return 'ERROR !!'
	if(!isLoaded) return <Loading/>

	return(
		<Fragment>
		<h3 className='add-new-address'> Add New Address </h3>
		<div className='map-container'>
			<GoogleMap
	         mapContainerStyle={mapContainerStyle}
	         zoom={6.15}
	         center={center}
	         options={options}
	         onClick={onMapClick}
	         onLoad={onMapLoad}
	        >
	        <button onClick={Locate} className='locate-me-button compass'>
				<img src={pin} alt='pin' className='pin'/>
				Locate Me
			</button>
	      		<Marker
	      		 position={{ lat: marker.lat, lng: marker.lng }} 
	      		 onClick={()=>console.log(marker)}
	      		/>
	      	</GoogleMap>
      	</div>
      	</Fragment>	
	)
}


export default GMap
