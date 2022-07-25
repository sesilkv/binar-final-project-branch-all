import React from "react";
import "./profile.css";

const Profile_Option = () => {
	return (
		<div>
			<select id="user_city" className="select_border">
				<option disabled>Pilih Kota</option>
				<option>kediri</option>
				<option>karawang</option>
			</select>
		</div>
	);
};

export default Profile_Option;
