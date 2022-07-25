import React from "react";
import { Link } from "react-router-dom";

const ProdukButtons = () => {
	return (
		<div class="d-flex produk_btnGroup">
			<div className="">
				<Link to='/seller'>
					<button class="produk_btn1 text_reguler" type="button">
						Preview
					</button>
				</Link>
			</div>
			<div className="">
				<Link to='/daftarjual'><button class="produk_btn2 text_reguler" type="button">
					Terbitkan
				</button>
				</Link>
			</div>
		</div>
	);
};

export default ProdukButtons;
