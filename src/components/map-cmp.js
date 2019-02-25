import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MyMapComponent = withScriptjs(withGoogleMap(({ isMarkerShown, markers, defaultCenter,center }) =>

    <GoogleMap
        defaultZoom={15}
        // defaultCenter={defaultCenter}
        center={center}
    >
        {
            isMarkerShown &&
            markers.map((marker,idx) => <Marker 
            key={idx} 
            position={marker.position} 
            // title={marker.title} 
            label={marker.label} />)
        }
    </GoogleMap>
))

export default MyMapComponent