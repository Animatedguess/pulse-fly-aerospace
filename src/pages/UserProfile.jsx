import React from "react";

const UserProfile = () => {
	return (
		<div>
			{/* options for account */}
			<div>
				<select name="account" id="account">
					<option value="order">My orders</option>
					<option value="address">My adresses</option>
					<option value="information">My informations</option>
				</select>
				<button>Log out</button>
			</div>
			{/* user details */}
		</div>
	);
};

export default UserProfile;
