import React from "react";
import Diminati from "../InterestedProduct";
import SellerCategory from "../SellerCategory";
import ProfileSeller from "../ProfileSeller";
import "../daftarJual.css";
import Nav from "../../Nav/Nav";

const BarangDiminati = () => {
	return (
		<div>
			<Nav />
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
				<section className=" main_container row">
					<div className="d-none d-lg-block col-lg-3">
						<SellerCategory />
					</div>
					<div className="col-lg-9 card_group_container mt-4">
						<Diminati />
					</div>
				</section>
			</div>
		</div>
	);
};

export default BarangDiminati;

/* <section className="d-none d-lg-block">
<EarlyNavbar />
</section>

*/
