import React from "react";
import EarlyNavbar from "../Navbar/EarlyNavbar";
import ProfileSeller from "../SellerDaftarJual/ProfileSeller";
import Slider from "../SellerDaftarJual/Slider";
import SellerCategory from "../SellerDaftarJual/SellerCategory";
import "../SellerDaftarJual/daftarJual.css";
import DiminatiCard from "./DiminatiCard";
import Nav from "../Nav/Nav";

const Diminati = () => {
	return (
		<div>
			<Nav />
			<section className="d-none d-lg-block">
				<EarlyNavbar />
			</section>
			<div className="container mt-3">
				<section className="d-flex seller_header">
					<div className=" d-lg-none">
						<img src="/SVG/menu.svg" alt="menu icon" className=" seller_menu" />
					</div>
					<h2>Daftar Jual Saya</h2>
				</section>
				<section>
					<ProfileSeller />
				</section>
				<section className="swiper_section container d-md-none">
					<Slider />
				</section>
				<section className=" main_container row">
					<div className="d-none d-lg-block col-lg-3">
						<SellerCategory />
					</div>
					<div className="col-lg-9 card_group_container">
						<DiminatiCard />
					</div>
				</section>
			</div>
		</div>
	);
};

export default Diminati;
