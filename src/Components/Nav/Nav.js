import React, { useState, useEffect } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import axios from "axios";

// ICONS
import { TbHeartHandshake } from "react-icons/tb";
import { BiListUl } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

const Nav = () => {
	const user = localStorage.getItem("secondHandToken");
	console.log(user);

	// SEARCHBAR
	const [search, setSearch] = useState("");
	const doSearch = (e) => {
		setSearch(e.target.value);
	};
	console.log(search);

	// NOTIF DROPDOWN
	const [notifdrop, setNotifDrop] = useState([]);

	useEffect(() => {
		axios.get("https://finalsecondhand-staging.herokuapp.com/notification/").then((res) => {
			setNotifDrop(res.data.findNotification);
		});
	}, []);

	return (
		<div className="top-nav">
			<div className="wrap-nav">
				{/* LOGO */}
				<div>
					<Link to="/">
						<TbHeartHandshake alt="LogoSecondHand" className="logo" />
					</Link>
				</div>

				{/* SEARCH */}
				<div className="mx-4 flex-grow-1 navbar_search">
					<form className="form-inline">
						<input className="search-navbar form-control" type="text" name="search" placeholder="Search..." aria-label="Search" onChange={doSearch.bind(this)} value={search} />
					</form>
					<FiSearch className="icon_search text-muted" />
				</div>

				<input id="menu-toggle" type="checkbox" />
				<label className="menu-button-container" for="menu-toggle">
					<div className="menu-button"></div>
				</label>

				<ul className="menu">
					{user === null && (
						<Link to="/login">
							<button className="login">Login</button>
						</Link>
					)}

					{/* PROTECTED */}
					{/* DAFTAR JUAL */}
					<li>
						{user !== null && (
							<Link to="/daftarjual" className="icons-menu">
								<BiListUl />
								<p className="menu-word">Daftar Jual</p>
							</Link>
						)}
					</li>

					{/* PROTECTED */}
					{/* NOTIFICATION */}
					<li>
						{user !== null && (
							<div className="dropdown-notif">
								<Link to="/notification" className="icons-menu">
									<IoIosNotificationsOutline />
									<p className="menu-word">Notifikasi</p>
								</Link>
								{/* <div className="icons-menu-mobile">
                                <IoIosNotificationsOutline />
                                <p className='menu-word'>Notifikasi</p>
                            </div> */}
								<div className="dropdown-content-notif">
									<div className="align-items-center">
										<div className="px-3 py-2 box-notif">
											{/* {notifdrop.map((ndrop, id) => {
												return ( */}
											<Link to="/notification">
												<div className="notif1 py-1">
													<div>
														<img src="/images/jamCowo.png" alt="" className="img-notif-dropdown" />
													</div>
													<div className="text-notif-product">
														<div className="text-muted small-notifdrop">Berhasil diterbitkan</div>
														<div className="desc-notifdrop">Jam Tangan Casio</div>
														<div className="desc-notifdrop">Rp 250.000</div>
													</div>
													<p className="text-muted small-notifdrop time-clock">20 Apr, 14:04</p>
													<div className="alerts-notifdrop rounded-circle"></div>
												</div>
											</Link>
											{/* );
											})} */}
											<hr className="m-0 text-muted" />

											<Link to="/notification">
												<div className="notif1 py-1">
													<div>
														<img src="/images/jamCowo.png" alt="" className="img-notif-dropdown" />
													</div>
													<div className="text-notif-product">
														<div className="text-muted small-notifdrop">Penawaran produk</div>
														<div className="desc-notifdrop">Jam Tangan Casio</div>
														<div className="desc-notifdrop">Rp 250.000</div>
														<div className="desc-notifdrop">Ditawar Rp 200.000</div>
													</div>
													<p className="text-muted small-notifdrop time-clock">20 Apr, 14:04</p>
													<div className="alerts-notifdrop rounded-circle"></div>
												</div>
											</Link>
											<hr className="m-0 text-muted" />

											<Link to="/notification">
												<div className="notif1 py-1">
													<div>
														<img src="/images/jamCowo.png" alt="" className="img-notif-dropdown" />
													</div>
													<div className="text-notif-product">
														<div className="text-muted small-notifdrop">Penawaran produk</div>
														<div className="desc-notifdrop">Jam Tangan Casio</div>
														<div className="desc-notifdrop">Rp 250.000</div>
														<div className="desc-notifdrop">Ditawar Rp 200.000</div>
													</div>
													<p className="text-muted small-notifdrop time-clock">20 Apr, 14:04</p>
													<div className="alerts-notifdrop rounded-circle"></div>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
						)}
					</li>

					{/* PROTECTED */}
					{/* PROFIL */}
					<li>
						{user !== null && (
							<Link to="/profile" className="icons-menu">
								<BsPerson />
								<p className="menu-word">Profil</p>
							</Link>
						)}
					</li>

					{/* PROTECTED */}
					{/* LOGOUT */}
					<li>
						{user !== null && (
							<Link to="/logout">
								<button className="logout">Logout</button>
							</Link>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
