import React from "react";
import Header from "./ProfileHeader";
// import SubHeader from "./ProfileSubHeader";
import Form from "./ProfileForm";
import "./Profile.css";

const profile = () => {
	// setting dropzone

	return (
		<div className="container-fluid profile_great_container">
			<section>
				<Header />
			</section>
			<section>
				<Form />
			</section>
		</div>
	);
};

export default profile;

/*

		<section>
				<Header />
			</section>
			<section>
				<SubHeader />
			</section>

*/
