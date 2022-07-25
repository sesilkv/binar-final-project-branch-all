import React from "react";
import "./daftarJual.css";
import { Link } from "react-router-dom";

const slider = () => {
	return (
		<div>
			<Link to="/daftarjual">
				<button className="btn_swiper">Produk</button>
			</Link>
			<Link to="/diminati">
				<button className="btn_swiper">Diminati</button>
			</Link>
			<Link to="/terjual">
				<button className="btn_swiper">Terjual</button>
			</Link>
		</div>
	);
};

export default slider;
