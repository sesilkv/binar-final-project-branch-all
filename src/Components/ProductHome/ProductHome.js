import React, { useEffect, useState, useRef } from "react";
import "./producthome.css";
import { FiSearch } from "react-icons/fi";
import FloatButton from "../FloatButton/FloatButton";
import axios from "axios";
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';

const Category = () => {

	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [statusCode, setStatusCode] = useState()
	const [search, setSearch] = useState();

	useEffect(() => {
		axios.get('https://finalsecondhand-staging.herokuapp.com/product/')
			.then(res => {
				setProducts(res.data.data.rows);
			})
	}, [])

	useEffect(() => {
		axios.get('https://finalsecondhand-staging.herokuapp.com/categories/')
			.then(res => {
				setCategories(res.data.categories);
				// console.log(categories)
			})
	}, [])

	const ref = useRef(null);

	const categoryButton = (event) => {
		if (localStorage.getItem("secondHandToken")) {
			axios
				.get(
					`https://finalsecondhand-staging.herokuapp.com/product?category=${event.currentTarget.id}`,
					{
						headers: {
							Authorization: `Bearer ${window.localStorage.getItem("secondHandToken")}`,
						},
					}
				)
				.then((res) => {
					setSearch(event);
					setProducts(res.data.data);
					setStatusCode(res.status);
				})
				.catch((err) => {
					setStatusCode(err.response.status);
				});
		} else {
			axios
				.get(
					`https://finalsecondhand-staging.herokuapp.com/product?category=${event.currentTarget.id}`
				)
				.then((res) => {
					setSearch(event);
					setProducts(res.data.data);
					setStatusCode(res.status);
				})
				.catch((err) => {
					setStatusCode(err.response.status);
				});
		}
	};

	return (
		<div className="container">
			{/* CATEGORY */}
			<h6 className="telusur-cate">Telusuri Kategori</h6>
			<div className="d-flex flex-row m-3 overflow-auto">
				<Link to='/'>
					<button
						type="button" className="btn-cate m-2">
						<FiSearch className="fi m-1" />
						Semua
					</button>
				</Link>
				<Link to='/hobi'>
					<button
						type="button" className="btn-cate m-2">
						<FiSearch className="fi m-1" />
						Hobi
					</button>
				</Link>
				<Link to='/kendaraan'>
					<button
						type="button" className="btn-cate m-2">
						<FiSearch className="fi m-1" />
						Kendaraan
					</button>
				</Link>
				<Link to='/elektronik'>
					<button
						type="button" className="btn-cate m-2">
						<FiSearch className="fi m-1" />
						Elektronik
					</button>
				</Link>
				<Link to='/fashion'>
					<button
						type="button" className="btn-cate m-2">
						<FiSearch className="fi m-1" />
						Fashion
					</button>
				</Link>


				{/* {categories.map((category) => {
					return (
						// <Link to={`${category.name}`}>
						<button id={category.name} ref={ref} onClick={categoryButton}
							type="button" className="btn-cate m-2">
							<FiSearch className="fi m-1" />
							{category.name}
						</button>
						// </Link>
					)
				})} */}
			</div>

			{/* CARDS */}
			<div className='style_producthome'>
				{products.map((product) => {
					return (
						<Link to={`/buyer/${product.id}`}>
							<div className="card style_card_home">
								<img className="card-img-top p-2 style_img" src={product.product_pict[0]} alt="Card image" />
								<div className="card-body">
									<h5 className="card-title">{product.name}</h5>
									{product.product_tags.map((category) => {
										return (
											<small className="card-text text-muted">{category.category_name} </small>
											// <p className="fw-light">{category.category_name}</p>
										)
									})}
									<p className="card-text mt-2">
										<NumberFormat value={product.price} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} />
									</p>
								</div>
							</div>
						</Link>
					)
				})}
				{/* <div className='style_producthome'> */}

				{/* ELEKTRONIK */}
				<div className="card style_card_home">
					<img className="card-img-top p-2 style_img" src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg" alt="Card image" />
					<div className="card-body">
						<h5 className="card-title">MacBook Pro</h5>
						<small className="card-text text-muted">Elektronik</small>
						<p className="card-text mt-2">Rp8.525.000</p>
					</div>
				</div>

				{/* FASHION */}
				<div className="card style_card_home">
					<img className="card-img-top p-2 style_img" src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg" alt="Card image" />
					<div className="card-body">
						<h5 className="card-title">Gray Black Sweater</h5>
						<small className="card-text text-muted">Fashion</small>
						<p className="card-text mt-2">Rp125.000</p>
					</div>
				</div>

				{/* HOBI */}
				<div className="card style_card_home">
					<img className="card-img-top p-2 style_img" src="https://static.sehatq.com/content/review/product/image/116620211004064117.jpeg" alt="Card image" />
					<div className="card-body">
						<h5 className="card-title">Pull Up</h5>
						<small className="card-text text-muted">Hobi</small>
						<p className="card-text mt-2">Rp55.000</p>
					</div>
				</div>

				{/* ELEKTRONIK */}
				<div className="card style_card_home">
					<img className="card-img-top p-2 style_img" src="https://cdn.pixabay.com/photo/2014/09/27/13/45/notebook-463490_960_720.jpg" alt="Card image" />
					<div className="card-body">
						<h5 className="card-title">ASUS ZenBook</h5>
						<small className="card-text text-muted">Elektronik</small>
						<p className="card-text mt-2">Rp4.775.000</p>
					</div>
				</div>

				{/* KENDARAAN */}
				<div className="card style_card_home">
					<img className="card-img-top p-2 style_img" src="https://disk.mediaindonesia.com/thumbs/1200x-/news/2021/01/e74c438308d3a03472e4889099cf01f8.jpg" alt="Card image" />
					<div className="card-body">
						<h5 className="card-title">Terios</h5>
						<small className="card-text text-muted">Kendaraan</small>
						<p className="card-text mt-2">Rp100.550.000</p>
					</div>
				</div>

				{/* FASHION */}
				<div className="card style_card_home">
					<img className="card-img-top p-2 style_img" src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg" alt="Card image" />
					<div className="card-body">
						<h5 className="card-title">Light Converse</h5>
						<small className="card-text text-muted">Fashion</small>
						<p className="card-text mt-2">Rp663.000</p>
					</div>
				</div>
			</div>

			{/* FLOATING ACTION BUTTON */}
			<FloatButton />
		</div>
	);
};

export default Category;
