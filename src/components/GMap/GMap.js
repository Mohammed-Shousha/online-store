import React, {useRef} from 'react'
import { GoogleMap, Marker, useLoadScript} from "@react-google-maps/api"
import Geocode from "react-geocode"
import './GMap.css'
import compass from '../Icons/compass.svg'
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
		<div className='map-container'>
			<img 
			 src={compass} alt='compass' 
			 className='compass'
			 onClick={Locate} 
			/>
			<GoogleMap
	         mapContainerStyle={mapContainerStyle}
	         zoom={6.15}
	         center={center}
	         options={options}
	         onClick={onMapClick}
	         onLoad={onMapLoad}
	        >
	      		<Marker
	      		 key={`${marker.lat}-${marker.lng}`}
	      		 position={{ lat: marker.lat, lng: marker.lng }} 
	      		 onClick={()=>console.log(marker)}
	      		/>
	      	</GoogleMap>
      	</div>	
	)
}


export default GMap
