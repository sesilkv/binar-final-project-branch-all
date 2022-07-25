import React from "react";
import "./earlyNavbar.css";
import { Link } from "react-router-dom";

import { BiListUl } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";

const EarlyNavbar = () => {
	return (
		<>
			<header id="header-nav" className="mb-5">
				<div className="container pt-2">
					<div className="d-flex m-2 align-items-center">
						{/* LOGO */}
						<div className="col-auto">
							<Link to="/">
								<img src="/images/logo.png" alt="LogoSecondHand" className="logo" />
							</Link>
						</div>

						{/* SEARCH */}
						<div className="col-auto mx-4 flex-grow-1">
							<div>
								<form className="form-inline">
									<input className="form-control form-search" type="text" placeholder="Search..." aria-label="Search" />
									{/* <button type="submit"><FiSearch /></button> */}
								</form>
								{/* <button className="icon"><FiSearch /></button> */}
							</div>
						</div>

						{/* MENU */}
						<div className="ham-menu col-auto d-lg-none">
							<GiHamburgerMenu />
						</div>
						<div className="col-auto d-none d-lg-block">
							<Link to="/login">
								<button type="button" className="btn-login">
									<BiLogIn className="m-1" />
									Masuk
								</button>
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default EarlyNavbar;
