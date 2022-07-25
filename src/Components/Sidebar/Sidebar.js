import React from "react";
import "./sidebar.css";
import { ImCross } from "react-icons/im";
import { BiHomeHeart } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { hideSidebar } from "../../store/sidebar/actions/sidebar";

const SideBar = () => {
	const sidebar = useSelector((state) => state.sidebar);
	const dispatch = useDispatch();

	/*
	const handleClick = () => {
		dispatch(hideSidebar());
	};

    */

	return (
		<div className="sidebar" id={sidebar ? "show-sidebar" : "hide-sidebar"}>
			<div className="sidebar_content">
				<ul className="sidebar_links">
					<li className="sidebar_link">
						<Link to="/" className="sidebar_menu">
							<BiHomeHeart className="icons_sidebar" />
							Home
						</Link>
					</li>
					<li className="sidebar_link">
						<Link to="/daftarjual" className="sidebar_menu">
							<BiListUl className="icons_sidebar" />
							Daftar Jual
						</Link>
					</li>
					<li className="sidebar_link">
						<Link to="/notification" className="sidebar_menu">
							<IoIosNotificationsOutline className="icons_sidebar" />
							Notifikasi
						</Link>
					</li>
					<li className="sidebar_link">
						<Link to="/profile" className="sidebar_menu">
							<BsPerson className="icons_sidebar" />
							Profil
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;

/*

<div className="sidebar_close">
					<ImCross onClick={() => handleClick()} />
				</div>

*/
