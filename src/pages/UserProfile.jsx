import React from "react";

const UserProfile = () => {
  function handlingFunction(e){
    console.log(e.target.value);
  }
	return (
		<div className="w-full h-[90vmax] bg-green-100 text-gray-800 flex items-center justify-center">
			{/* options for account */}
			<div>
				<select name="account" id="account" onChange={handlingFunction}>
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
