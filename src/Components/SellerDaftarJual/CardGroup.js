import React, { useState, useEffect } from "react";
import "./daftarJual.css";
import { Link } from "react-router-dom";
import axios from "axios";
import NumberFormat from 'react-number-format';

const CardGroup = () => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get('https://finalsecondhand-staging.herokuapp.com/product/')
			.then(res => {
				setProducts(res.data.data.rows);
			})
	}, [])


	return (
		<div className="card_container my-3">
			<div className="row ">
				{products.map((product) => {
					return (
						<div className="col-5 col-lg-4 mb-3">
							<Link to={`/seller/${product.id}`} className='link-seller'>
								<div className="card rounded">
									<div className="text-center">
										<img src="/images/jamCowo.png" className="image_card rounded" alt="watch model" />
									</div>
									<div className="text_container container">
										<h5 className="fw-normal">{product.name}</h5>
										<p className="fw-light">Aksesoris</p>
										<p className="fw-bold">
											<NumberFormat value={product.price} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} />
										</p>
									</div>
								</div>
							</Link>
						</div>
					)
				})}

			</div>
		</div>
	);
};

export default CardGroup;

/*

		<div className="outer_container row mt-4">
			<div className="card_container col-5 mb-3 col-lg-4">
				<div className="text-center">
					<img src="/images/jamCowo.png" className="image_card" alt="card" />
				</div>
				<div className="text_container container">
					<h5 className="fw-normal">Jam Tangan Casio</h5>
					<p className="fw-light">Aksesoris</p>
					<p className="fw-bold">250.000</p>
				</div>
			</div>
			<div className="card_container col-5 mb-3 col-lg-4">
				<div className="text-center">
					<img src="/images/jamCowo.png" className="image_card" alt="card" />
				</div>
				<div className="text_container container">
					<h5 className="fw-normal">Jam Tangan Casio</h5>
					<p className="fw-light">Aksesoris</p>
					<p className="fw-bold">250.000</p>
				</div>
			</div>
			<div className="card_container col-5 mb-3 col-lg-4">
				<div className="text-center">
					<img src="/images/jamCowo.png" className="image_card" alt="card" />
				</div>
				<div className="text_container container">
					<h5 className="fw-normal">Jam Tangan Casio</h5>
					<p className="fw-light">Aksesoris</p>
					<p className="fw-bold">250.000</p>
				</div>
			</div>
		</div>


<div className="outer_container d-flex mt-4 justify-content-around">
			<div className="card_container">
				<div className="text-center">
					<img src="/images/jamCowo.png" className="image_card" alt="card" />
				</div>
				<div className="text_container container">
					<h5 className="fw-normal">Jam Tangan Casio</h5>
					<p className="fw-light">Aksesoris</p>
					<p className="fw-bold">250.000</p>
				</div>
			</div>
			<div className="card_container">
				<div className="text-center">
					<img src="/images/jamCowo.png" className="image_card" alt="card" />
				</div>
				<div className="text_container container">
					<h5 className="fw-normal">Jam Tangan Casio</h5>
					<p className="fw-light">Aksesoris</p>
					<p className="fw-bold">250.000</p>
				</div>
			</div>
			<div className="card_container">
				<div className="text-center">
					<img src="/images/jamCowo.png" className="image_card" alt="card" />
				</div>
				<div className="text_container container">
					<h5 className="fw-normal">Jam Tangan Casio</h5>
					<p className="fw-light">Aksesoris</p>
					<p className="fw-bold">250.000</p>
				</div>
			</div>
		</div>

<div className="outer_container row mt-4">
			<div className="card_container col-5 mb-3 col-lg-4">
				<div className="text-center">
					<img src="/images/jamCowo.png" className="image_card" alt="card" />
				</div>
				<div className="text_container container">
					<h5 className="fw-normal">Jam Tangan Casio</h5>
					<p className="fw-light">Aksesoris</p>
					<p className="fw-bold">250.000</p>
				</div>
			</div>
			<div className="card_container col-5 mb-3 col-lg-4">
				<div className="text-center">
					<img src="/images/jamCowo.png" className="image_card" alt="card" />
				</div>
				<div className="text_container container">
					<h5 className="fw-normal">Jam Tangan Casio</h5>
					<p className="fw-light">Aksesoris</p>
					<p className="fw-bold">250.000</p>
				</div>
			</div>
			<div className="card_container col-5 mb-3 col-lg-4">
				<div className="text-center">
					<img src="/images/jamCowo.png" className="image_card" alt="card" />
				</div>
				<div className="text_container container">
					<h5 className="fw-normal">Jam Tangan Casio</h5>
					<p className="fw-light">Aksesoris</p>
					<p className="fw-bold">250.000</p>
				</div>
			</div>
		</div>

	.card_container {
		width: 100%;
		margin-top: 50px;
		border: 1px solid rgb(236, 236, 236);
		border-radius: 16px;
		box-shadow: -1px 2px 5px 6px rgba(235, 235, 235, 0.75);
		-webkit-box-shadow: -1px 2px 5px 6px rgba(235, 235, 235, 0.75);
		-moz-box-shadow: -1px 2px 5px 6px rgba(235, 235, 235, 0.75);
		margin-right: 20px;
		cursor: pointer;
	}



*/
