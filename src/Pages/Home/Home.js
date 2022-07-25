import React from "react";
import Slider from "../../Components/Slider/Slider";
import ProductHome from "../../Components/ProductHome/ProductHome";
import Nav from "../../Components/Nav/Nav";

const Home = () => {
	return (
		<>
			<Nav />
			<Slider />
			<ProductHome />
		</>
	);
};

export default Home;
