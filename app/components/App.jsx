// import uuid from 'node-uuid';
import AltContainer from 'alt-container';
import React from 'react';
// import Lanes from './Lanes.jsx';
// import LaneActions from '../actions/LaneActions';
// import LaneStore from '../stores/LaneStore';
import Searchbar from './Searchbar.jsx';
import PlaceStore from '../stores/PlaceStore';
import Places from './Places.jsx';
import Map from './Map.jsx';
import Filters from './Filters.jsx';


export default class App extends React.Component {
	/*
	constructor(props){
		super(props);
	}*/

	render() {
		//Note to self: keep the state immutable

		return (
			<div>
				<Searchbar />
				<Filters />
				<AltContainer stores={[PlaceStore]} inject={{ places: PlaceStore.getState().places || [] }}>
					<Places />
					<Map />
				</AltContainer>
			</div>
		);
	}

}
