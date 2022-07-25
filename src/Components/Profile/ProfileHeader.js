import React from "react";
import "./Profile.css";

const ProfileHeader = () => {
	return (
		<header className="arrow d-flex">
			<div className="">
				<img src="/SVG/arrow_left.svg" alt="arrow icon" className=" profile_arrow_svg d-md-none" />
			</div>
			<div className="profile_header_sm text_reguler d-md-none ">
				<h3 className="">Lengkapi info account</h3>
			</div>
		</header>
	);
};

export default ProfileHeader;
