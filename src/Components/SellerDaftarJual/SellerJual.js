import React, {useState} from "react";
import "./daftarJual.css";
import Slider from "./slider";
import ProfileSeller from "./ProfileSeller";
import CardGroup from "./CardGroup";
import SellerCategory from "./SellerCategory";
import EarlyNavbar from "../Navbar/EarlyNavbar";
import InterestedProduct from "./InterestedProduct";
import { GiHamburgerMenu } from "react-icons/gi";
import AlertSellerJual from '../Alert/AlertSellerJual';

const SellerJual = () => {
	const [show, setShow] = useState(false);
	const [alertShow, setAlertShow] = useState(false); 

	return (
		<div>
			<section className="d-none d-lg-block">{/*	<EarlyNavbar /> */}</section>
			<AlertSellerJual show={alertShow} onClose={() => setAlertShow(false)} />
			<div className="container mt-3">
				<section className="d-flex seller_header">
					<div className=" d-lg-none">
						<GiHamburgerMenu alt="menu icon" className="seller_menu" />
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
						<CardGroup />
					</div>
				</section>
			</div>
		</div>
	);
};

export default SellerJual;

/*


<div className="profile ">
					<div className="row">
						<div className="image_position col-6"></div>
						<div className="col-6 seller_bio">
							<h6 className="">Nama Penjual</h6>
							<p>Kota</p>
						</div>
					</div>
				</div>
				<button className="btn_seller_bio">Edit</button>


*/
