import React, { useRef, useState } from 'react'
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import Geocode from "react-geocode"
import { useTranslation } from 'react-i18next'
import Loading from '../../Components/Loading'
import { mapContainerStyle, MapTitle, LocateMe, AddressWindow } from '../../Components/MapComponents'
import pin from '../../Data/Icons/pin.svg'

const center = {
   lat: 26.8,
   lng: 30.8,
}

const options = {
   disableDefaultUI: true,
   zoomControl: true,
   clickableIcons: false,
   Language: 'ar',
}


const GMap = ({ address, setAddress }) => {

   const { t } = useTranslation()

   const [selected, setSelected] = useState(null)

   const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS
   })

   const mapRef = useRef()
   const onMapLoad = React.useCallback((map) => {
      mapRef.current = map
   }, [])

   const onMapClick = (e) => {
      setSelected({
         lat: e.latLng.lat(),
         lng: e.latLng.lng()
      })

      toAddress(e.latLng.lat(), e.latLng.lng())
   }

   const panTo = React.useCallback(({ lat, lng }) => {
      mapRef.current.panTo({ lat, lng })
      mapRef.current.setZoom(16)
   }, [])

   const Locate = () => {
      navigator.geolocation.getCurrentPosition(
         ({ coords }) => {
            const { latitude, longitude } = coords
            setSelected({
               lat: latitude,
               lng: longitude
            })

            panTo({
               lat: latitude,
               lng: longitude
            })

            toAddress(latitude, longitude)
         },
         (error) => console.error(error)
      )
   }

   const toAddress = (lat, lng) => {
      Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS)
      Geocode.fromLatLng(lat, lng).then(
         res => {
            const address = res.results[0].formatted_address
            setAddress(address)
         },
         error => {
            console.error(error)
         }
      )
   }


   if (loadError) return 'ERROR !!'
   if (!isLoaded) return <Loading />

   return (
      <>
         <MapTitle> {t('Map.Title')} </MapTitle>
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
               {t('Map.Button')}
            </LocateMe>
            {selected &&
               <AddressWindow
                  position={{ lat: selected.lat, lng: selected.lng }}
                  onCloseClick={() => {
                     setSelected(null)
                  }}
               >
                  <div>
                     <h3> Address </h3>
                     <p style={{ 'color': '#636363' }}> {address} </p>
                  </div>
               </AddressWindow>
            }
         </GoogleMap>
      </>
   )
}

export default GMap