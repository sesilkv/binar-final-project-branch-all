import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const RegisterHeader = () => {
	return (
		<div>
			<Link to="#">
				<img src="/SVG/arrow_left.svg" alt="arrow icon" className=" arrow-svg" />
			</Link>
		</div>
	);
};

export default RegisterHeader;
