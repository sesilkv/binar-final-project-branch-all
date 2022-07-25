import React from "react";
import ProdukImage from "./ProdukImage";
import InfoProduk from "./ProdukForm";
import ProdukButtons from "./ProdukButtons";
import ProdukHeader from "./ProdukHeader";

const LoginForm = () => {
	return (
		<div className="">
			<ProdukHeader />
			<div className="container-lg">
				<InfoProduk />
				<ProdukImage />
				<ProdukButtons />
			</div>
		</div>
	);
};

export default LoginForm;
