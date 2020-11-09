import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polyline,
  Marker
} from "react-google-maps";

class Map extends React.Component {
  path = [
    { lat: 18.558908, lng: -68.389916 },
    { lat: 18.558853, lng: -68.389922 },
    { lat: 18.558375, lng: -68.389729 },
    { lat: 18.558032, lng: -68.389182 },
    { lat: 18.55805, lng: -68.388613 },
    { lat: 18.558256, lng: -68.388213 },
    { lat: 18.558744, lng: -68.387929 }
  ];
  render = () => {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 18.559008, lng: -68.388881 }}
      >
        <Polyline path={this.path} options={{ strokeColor: "#FF0000 " }} />
        <Marker position={this.path[this.path.length - 1]} />
      </GoogleMap>
    );
  };
}

const MapComponent = withScriptjs(withGoogleMap(Map));

export default () => (
  <MapComponent
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px`, width: "500px" }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);
