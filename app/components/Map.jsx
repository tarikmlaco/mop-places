import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import AltContainer from 'alt-container';
import PlaceStore from '../stores/PlaceStore';
import ComponentHandler from '../libs/material';

const coords = {
  lat: 43.8568172,
  lng: 18.4028613
};

export default class Map extends React.Component {

	constructor(props){
		super(props);

        this.onMapCreated = this.onMapCreated.bind(this);
        this.renderMarkers = this.renderMarkers.bind(this);
	}

	componentDidUpdate(){
		ComponentHandler.upgradeDom();
	}

	onMapCreated(map) {

	    map.setOptions({
	      disableDefaultUI: true
	    });
	}

    renderMarkers(place) {
        return <Marker lat={place.lat} lng={place.lng} draggable={false} />;
    }

	render() {
		const places = this.props.places;

		return (
		  <Gmaps
		    className="map-canvas"
		    lat={coords.lat}
		    lng={coords.lng}
		    zoom={10}
		    params={{v: '3.exp'}}
		    onMapCreated={this.onMapCreated}>
            {places.map(this.renderMarkers)}
		  </Gmaps>
		);
	}

}