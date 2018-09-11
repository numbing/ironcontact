import React, { Component } from "react";
import logo from "./logo.svg";
import Contact from "./Contact";
import data from "./contacts.json";

import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contacts: []
		};
	}

	componentDidMount() {
		let firstContacts = [];
		for (let i = 0; i < 5; i++) {
			firstContacts.push({
				name: data[i].name,
				pictureUrl: data[i].pictureUrl,
				popularity: data[i].popularity
			});
			this.setState({
				contacts: firstContacts
			});
		}
	}

	render() {
		return (
			<div className="App">
				<h1>IronContacts</h1>
				<button onClick={this.addRandomContact}>Add random contact</button>
				<table>
					<thead>
						<td>Picture</td>
						<td>Name</td>
						<td>Popularity</td>
					</thead>
					<tbody>
						{this.state.contacts.map((e, i) => {
							return (
								<Contact
									key={i}
									name={e.name}
									pictureUrl={e.pictureUrl}
									popularity={e.popularity}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}

	addRandomContact = () => {
		let random = Math.floor(Math.random() * data.length);
		this.setState({
			contacts: this.state.contacts.concat(data[random])
		});
	};
}

export default App;
