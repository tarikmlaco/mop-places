import AltContainer from 'alt-container';
import React from 'react';
import Searchbar from './Searchbar.jsx';
import PlaceStore from '../stores/PlaceStore';
import Places from './Places.jsx';
import Map from './Map.jsx';
import Filters from './Filters.jsx';
import ComponentHandler from '../libs/material';

export default class App extends React.Component {

	componentDidUpdate(){
		ComponentHandler.upgradeDom();
	}

	render() {
		//Note to self: keep the state immutable
		return (
			<div className="mdl-layout">
				<header className="mdl-layout__header">
					<Searchbar className="mdl-layout__header-row" />
					<Filters className="mdl-layout__header-row filters" />
				</header>
				<AltContainer stores={[PlaceStore]} inject={{ places: (props) => { return PlaceStore.getState().places || [] }}}>
					<Map />
					<Places />
				</AltContainer>
			</div>
		);
	}
}