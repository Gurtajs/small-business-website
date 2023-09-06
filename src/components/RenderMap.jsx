import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

import React from 'react'

const RenderMap = () => {
  const { isLoaded }  = useLoadScript({
      googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
  });
const center = useMemo(() => ({ lat: 52.57556, lng: -2.03396 }), []);

  return (
    <div>
      {!isLoaded ? (
          <h1>Loading...</h1>
      ) : (
          <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={20}
          
          >
          <MarkerF position={{ lat: 52.57556, lng: -2.03396 }}/>
          </GoogleMap>
      )}
    </div>
  )
}

export default RenderMap
