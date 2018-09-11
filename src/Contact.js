import React, { Component } from "react";

class Contact extends Component {
	render() {
		return (
			<tr>
				<td>
					<img src={this.props.pictureUrl} className="img" />
				</td>
				<td>
					<p>{this.props.name}</p>
				</td>
				<td>
					<p>{this.props.popularity}</p>
				</td>
			</tr>
		);
	}
}

export default Contact;
