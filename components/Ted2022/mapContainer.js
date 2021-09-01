/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        initialCenter={{
          lat: 49.2887,
          lng: -123.1112,
        }}
        google={this.props.google}
        zoom={15}
      >
        <Marker
          title={"Vancouver Convention Centre"}
          position={{
            lat: 49.2887,
            lng: -123.1112,
          }}
          onClick={this.onMarkerClick}
        />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{"Vancouver Convention Center"}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
