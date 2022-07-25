import React, { useState, useRef } from "react";
import "./category.css";
import ProductHome from "../ProductHome/ProductHome";
import { FiSearch } from "react-icons/fi";
import FloatButton from "../FloatButton/FloatButton";
import axios from "axios";

const Category = () => {
	const [categories, setCategories] = useState([]);

	const ref = useRef(null);

	const filterCategory = (event) => {
		axios.get(`https://finalsecondhand-staging.herokuapp.com/product?category_id=${event.currentTarget.id}`).then((res) => {
			setCategories(res.data.data.rows);
		});
	};

	// const getCategory = async () => {
	// 	const category = await fetch("https://finalsecondhand-staging.herokuapp.com/categories")
	// 	const value = await category.json()
	// 	const result = value.categories.map(data => {
	// 		return {
	// 			label: data
	// 		}
	// 	})
	// 	console.log(result)
	// }

	// const categories = useSelector(store => store.category)
	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	axios.get('https://finalsecondhand-staging.herokuapp.com/categories/')
	// 	.then(response => {
	// 		dispatch({
	// 			type: 'populateCategories',
	// 			payload: {
	// 				categories: [...response.data]
	// 			}
	// 		})
	// 	})
	// }, [])

	return (
		<div className="container">
			<h6 className="telusur-cate">Telusuri Kategori</h6>
			<div className="d-flex flex-row m-3 overflow-auto">
				<button ref={ref} onClick={filterCategory} type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Semua
				</button>
				<button ref={ref} onClick={filterCategory} id="1" type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Hobi
				</button>
				<button ref={ref} onClick={filterCategory} id="2" type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Kendaraan
				</button>
				<button ref={ref} onClick={filterCategory} id="3" type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Baju
				</button>
				<button ref={ref} onClick={filterCategory} id="4" type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Elektronik
				</button>
				<button ref={ref} onClick={filterCategory} id="5" type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Kesehatan
				</button>
			</div>

			{/* CARDS */}
			<ProductHome />

			{/* FLOATING ACTION BUTTON */}
			<FloatButton />
		</div>
	);
};

export default Category;
