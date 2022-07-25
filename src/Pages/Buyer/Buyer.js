import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./buyer.css";
import { Button, Carousel } from "react-bootstrap";
import ModalBuyer from "../../Components/Modal/ModalBuyer";
import AlertBuyer from "../../Components/Alert/AlertBuyer";
// import Navbar from '../Components/Navbar/Navbar'
import axios from "axios";
import Nav from "../../Components/Nav/Nav";

const Buyer = () => {
	const [show, setShow] = useState(false);
	const [alertShow, setAlertShow] = useState(false);
	const [disable, setDisable] = useState(false);

	const buttonText = disable ? "Menunggu respon penjual" : "Saya Tertarik dan ingin Nego";

	const { id } = useParams();
	const url = `https://finalsecondhand-staging.herokuapp.com/product/${id}`;
	const [product, setProduct] = useState(null);

	let content = null;

	useEffect(() => {
		axios.get(url).then((response) => {
			setProduct(response.data);
		});
	}, [url]);

	if (product) {
		content = (
			<>
				<Nav />
				<AlertBuyer show={alertShow} onClose={() => setAlertShow(false)} />
				<div class="back-nav">
					<Link to="/">
						<img src="/img/fi_arrow-left.png" alt="" />
					</Link>
					{/* <a href=""><img src="img/fi_arrow-left.png" alt=""></a> */}
				</div>
				<div class="container">
					<div class="row">
						<div class="col-sm-12 col-md-8 col-lg-8 g-4 carousel-mobile">
							<Carousel>
								<Carousel.Item>
									<img className="d-block w-100" src="/img/product.png" alt="First slide" />
								</Carousel.Item>
								<Carousel.Item>
									<img className="d-block w-100" src="/img/product.png" alt="Second slide" />
								</Carousel.Item>
								<Carousel.Item>
									<img className="d-block w-100" src="/img/product.png" alt="Third slide" />
								</Carousel.Item>
								<Carousel.Item>
									<img className="d-block w-100" src="/img/product.png" alt="Third slide" />
								</Carousel.Item>
							</Carousel>
						</div>
						<div class="col-sm-12 col-md-4 col-lg-4 g-4 harga-mobile">
							<div class="row gy-4 alignment-mobile">
								<div class="col-12">
									<div class="row harga">
										<h1>
											{/* Jam Tangan Casio */}
											{product.data.name}
										</h1>
										<h3>
											{/* Aksesoris */}
											{product.data.product_tags.map(function (tag) {
												return tag.category.name + ", ";
											})}
										</h3>
										<h4 class="price">
											{/* Rp 250.000 */}
											Rp.
											{product.data.price}
										</h4>
										<Button disabled={disable} className="button shadow-none button-disable" onClick={() => setShow(true)}>
											<p className="btn-text">{buttonText}</p>
										</Button>
									</div>
								</div>
								<div class="col-12">
									<div class="row seller">
										<div class="col-4 profile">
											<Link to="/">
												<img class="" src="/img/profile.png" alt="" />
											</Link>
											{/* <img src="/img/profile.png" alt=""> */}
										</div>
										<div class="col-8 seller-name">
											<h1>
												{/* Nama Penjual */}
												{product.data.user.name}
											</h1>
											<h3>Kota</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-sm-12 col-md-8 col-lg-8 g-4 desc-mobile">
							<div class="row desc">
								<h1>Deskripsi</h1>
								<p>
									{/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Exercitationem cupiditate excepturi assumenda ipsum molestias, aut, odit quod
                                    quibusdam quos consequuntur libero incidunt impedit, nam possimus explicabo totam quam qui tempore. */}
									{product.data.description}
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Exercitationem cupiditate excepturi assumenda ipsum molestias, aut, odit quod quibusdam quos consequuntur libero incidunt impedit, nam possimus explicabo totam quam qui tempore.
								</p>
							</div>
						</div>
					</div>
					<ModalBuyer show={show}
						onHide={() => setShow(false)}
						alertOnHide={() => setAlertShow(true)}
						disableOnHide={() => setDisable(true)} />
				</div>
			</>
		);
	}

	return <>{content}</>;
};

export default Buyer;
