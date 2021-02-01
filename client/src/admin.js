import React from "react";

export default function Admin() {

	return (
		<div>
			<div>
				<h3>Add an Engagement</h3>
				<div>
					<label for="date">Date</label>
					<input type="date" name="date" />
				</div>
				<div>
					<label for="event">Event</label>
					<input type="text" name="event" />
				</div>
				<div>
					<label for="event-link">Event Link</label>
					<input type="url" name="event-link" />
				</div>


				{/* Only used for upcoming speaking engagements*/}
				<div>
					<label for="registration-link">Regsitration Link</label>
					<input type="url" name="registration-link" />
				</div>
				<div>
					<label for="cost">Cost</label>
					<input type="number" name="cost" />
				</div>
				<div>
					<label for="is-virtual">Is it virtual?</label>
					<select name="is-virtual" id="is-virtual">
			      		<option value="1">Yes</option>
			      		<option value="0">No</option>
			      	</select>
				</div>


				{/* Only used for past speaking engagements*/}
				<div>
					<label for="recording-link">Recording Link</label>
					<input type="url" name="recording-link" />
				</div>
				<div>
					<label for="presentation-link">Presentation Link</label>
					<input type="url" name="presentation-link" />
				</div>

				<button name="engagement-submit" id="engagement-submit">Submit</button>
			</div>
		</div>
	);

}