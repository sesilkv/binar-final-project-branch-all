import React from "react";
import { FiBox, FiStar, FiChevronRight } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { CgDollar } from "react-icons/cg";
import { Link } from "react-router-dom";

const SellerCategory = () => {
	return (
		<div className="container category_container ">
			<h5 className="text_reguler category_subHeader">Kategori</h5>

			<Link to="/daftarjual" className="seller_link">
				<div className="d-flex mb-3">
					<FiBox className="icon_category_seller" alt="box" />
					<p className="text_reguler category_text">Semua Produk</p>
					<FiChevronRight alt="arrow right" className="icon_right" />
				</div>
			</Link>
			<hr></hr>
			<Link to="/diminati" className="seller_link">
				<div className="d-flex mb-3">
					<GrFavorite className="icon_category_seller" alt="box" />
					<p className="text_reguler category_text">Diminati</p>
					<FiChevronRight alt="arrow right" className="icon_right_2" />
				</div>
			</Link>
			<hr></hr>
			<Link to="/terjual" className="seller_link">
				<div className="d-flex ">
					<CgDollar className="icon_category_seller" alt="box" />
					<p className="text_reguler category_text">Terjual</p>
					<FiChevronRight alt="arrow right" className="icon_right_3" />
				</div>
			</Link>
			<hr></hr>
			<Link to="/Wishlist" className="seller_link">
				<div className="d-flex ">
					<FiStar className="icon_category_seller" alt="box" />
					<p className="text_reguler category_text">Wishlist</p>
					<FiChevronRight alt="arrow right" className="icon_right_4" />
				</div>
			</Link>
		</div>
	);
};

export default SellerCategory;

/*

<Link to="/daftarjual" className="seller_link">
				<div className="d-flex mb-3">
					<img src="/SVG/box.svg" alt="box" />
					<p className="text_reguler category_text1">Semua Produk</p>
					<img src="/SVG/right.svg" alt="arrow right" className="icon_right" />
				</div>
			</Link>

			<hr></hr>
			<Link to="/diminati" className="seller_link">
				<div className="d-flex mb-3">
					<img src="/SVG/heart.svg" alt="box" />
					<p className="text_reguler category_text2">Diminati</p>
					<img src="/SVG/right.svg" alt="arrow right" className="icon_right_2" />
				</div>
			</Link>
			<hr></hr>
			<Link to="/terjual" className="seller_link">
				<div className="d-flex mb-3">
					<img src="/SVG/dollar.svg" alt="box" />
					<p className="text_reguler category_text2">Terjual</p>
					<img src="/SVG/right.svg" alt="arrow right" className="icon_right_3" />
				</div>
			</Link>
			<hr></hr>
			<Link to="/wishlist" className="seller_link">
				<div className="d-flex mb-3">
					<img src="/SVG/shopping-cart.svg" alt="box" />
					<p className="text_reguler category_text2">Wishlist</p>
					<img src="/SVG/right.svg" alt="arrow right" className="icon_right_2" />
				</div>
			</Link>


*/
