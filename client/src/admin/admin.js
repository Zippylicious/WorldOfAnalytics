import React from "react";
import AdminEngagements from './adminEngagements';
import AdminShare from './adminShare';
import './admin.css';

export default function Admin() {

	return (
		<div>
			<AdminEngagements/>
			<hr/>
			<AdminShare/>
		</div>
	);

}