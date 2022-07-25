import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './wishlist.css';

const WishlistCard = () => {

	const [wishlist, setWishlist] = useState([]);

	useEffect(() => {
		axios.get('https://finalsecondhand-staging.herokuapp.com/wishlist/',
			{
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem("secondHandToken")}`,
				},
			})
			.then(res => {
				console.log(res.data.data);
				setWishlist(res.data.data);
			})
	}, [])


	return (
		<div className="card_container my-3">
			<div className="row ">
				<div className="col-5 col-lg-4 mb-3 style-wishlist">
					{wishlist.map((wish) => {
						return (
							<Link to={`/seller/${wish.id}`}>
								<div className="card rounded">
									<div className="text-center">
										<img src="/images/jamCowo.png" className="image_card rounded" alt="watch model" />
									</div>
									<div className="text_container container">
										<h5 className="fw-normal">{wish.product.name}</h5>
										{wish.product.product_tags.map((category) => {
											return (
												<p className="fw-light">{category.category.name}</p>
											)
										})}
										<p className="fw-bold">Rp{wish.product.price}</p>
									</div>
								</div>
							</Link>
						)
					})}
				</div>
			</div>
			{/* <div className="col-5 col-lg-4 mb-3">
				<div className="card rounded">
					<div className="text-center">
						<img src="/images/jamCowo.png" className="image_card  rounded" alt="watch model" />
					</div>
					<div className="text_container container">
						<h5 className="fw-normal">Jam Tangan Casio</h5>
						<p className="fw-light">Aksesoris</p>
						<p className="fw-bold">250.000</p>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default WishlistCard;
