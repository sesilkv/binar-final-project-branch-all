import React from "react";
import { Link } from "react-router-dom";
import "./daftarJual.css";

const ProfileSeller = () => {
	return (
		<div className="profile_card">
			<div className="row">
				<div className="col-8 col-lg-10">
					<div className="row container">
						<div className="image_position col-3 col-lg-1"></div>
						<div className="seller_bio col-8 col-lg-auto">
							<h6 className="text_reguler">Nama Penjual</h6>
							<p className="text_footer">Kota</p>
						</div>
					</div>
				</div>
				<div className="col-3 col-lg-1 btn_container">
					<Link to="/profile">
						<button className="btn_seller_bio text_small ">Edit</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProfileSeller;

/*

	<div className="profile_card">
			<div className="d-flex">
				<div className="image_position"></div>
				<div className="seller_bio">
					<h6 className="">Nama Penjual</h6>
					<p>Kota</p>
				</div>
				<div className="button_container position-relative">
					<button className="btn_seller_bio position-absolute top-0 end-0">Edit</button>
				</div>
			</div>
		</div>

		<div className="profile_card">
			<div className="row">
				<div className="col-8">
					<div className="row container">
						<div className="image_position col-3"></div>
						<div className="seller_bio col-8">
							<h6 className="">Nama Penjual</h6>
							<p>Kota</p>
						</div>
					</div>
				</div>
				<div className=" col-4">
					<button className="btn_seller_bio ">Edit</button>
				</div>
			</div>
		</div>




*/
