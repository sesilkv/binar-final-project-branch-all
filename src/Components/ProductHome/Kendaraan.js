import React, { useEffect, useState } from "react";
import "./producthome.css";
import { FiSearch } from "react-icons/fi";
import FloatButton from "../FloatButton/FloatButton";
import Nav from "../Nav/Nav";
import Slider from '../Slider/Slider';
import axios from "axios";
import { Link } from "react-router-dom";

const Category = () => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('https://finalsecondhand-staging.herokuapp.com/product/')
            .then(res => {
                setProducts(res.data.data.rows);
            })

    }, [])

    const categoryButton = () => {

    }

    return (
        <>
            <Nav />
            <Slider />
            <div className="container">
                {/* CATEGORY */}
                <h6 className="telusur-cate">Telusuri Kategori</h6>
                <div className="d-flex flex-row m-3 overflow-auto">
                    <Link to='/'>
                        <button onClick={categoryButton}
                            type="button" className="btn-cate m-2">
                            <FiSearch className="fi m-1" />
                            Semua
                        </button>
                    </Link>
                    <Link to='/hobi'>
                        <button id='1' onClick={categoryButton}
                            type="button" className="btn-cate m-2">
                            <FiSearch className="fi m-1" />
                            Hobi
                        </button>
                    </Link>
                    <Link to='/kendaraan'>
                        <button id='2' onClick={categoryButton}
                            type="button" className="btn-cate m-2">
                            <FiSearch className="fi m-1" />
                            Kendaraan
                        </button>
                    </Link>
                    <Link to='/fashion'>
                        <button id='3' onClick={categoryButton}
                            type="button" className="btn-cate m-2">
                            <FiSearch className="fi m-1" />
                            Fashion
                        </button>
                    </Link>
                    <Link to='/elektronik'>
                        <button id='4' onClick={categoryButton}
                            type="button" className="btn-cate m-2">
                            <FiSearch className="fi m-1" />
                            Elektronik
                        </button>
                    </Link>
                </div>

                {/* CARDS */}
                <div className='style_producthome'>
                    {/* {products.map((product, id) => {
                        return (
                            <Link to={`/buyer/${id}`}>
                                <div className="card style_card_home" key={id}>
                                    <img className="card-img-top p-2 style_img" src={product.product_pic} alt="Card image" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <small className="card-text text-muted">{product.description}</small>
                                        <p className="card-text mt-2">Rp {product.price}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })} */}

                    {/* KENDARAAN */}
                    <div className="card style_card_home">
                        <img className="card-img-top p-2 style_img" src="https://disk.mediaindonesia.com/thumbs/1200x-/news/2021/01/e74c438308d3a03472e4889099cf01f8.jpg" alt="Card image" />
                        <div className="card-body">
                            <h5 className="card-title">Terios</h5>
                            <small className="card-text text-muted">Kendaraan</small>
                            <p className="card-text mt-2">Rp100.550.000</p>
                        </div>
                    </div>
                </div>

                {/* FLOATING ACTION BUTTON */}
                <FloatButton />
            </div>
        </>
    );
};

export default Category;
