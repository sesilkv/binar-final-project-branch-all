import React from "react";

const ProdukForm = () => {
	return (
		<div className="col-12 col-lg-4 produk_form_container">
			<form className="infoProdukForm_container">
				<label className="infoProduk_label" htmlFor="nama">
					Nama Produk
				</label>
				<div>
					<input type="text" name="produk" id="produk" required placeholder=" Nama Produk" className="infoProduk_box"></input>
				</div>
				<label className="infoProduk_label" htmlFor="nama">
					Harga Produk
				</label>
				<div>
					<input type="text" name="Produk" id="Produk" required placeholder="Harga Produk" className="infoProduk_box"></input>
				</div>
				<label className="infoProduk_label" htmlFor="nama">
					Kategori
				</label>
				<div>
					<input type="text" name=" PilihanProduk" id="PilihanProduk" required placeholder="Pilihan Produk" className="infoProduk_box"></input>
				</div>
				<label className="infoProduk_label" htmlFor="nama">
					Deskrpisi
				</label>
				<div>
					<input type="text" name=" Jalan" id="Jalan" required placeholder="Contoh Jalan" className="infoProduk_box infoProduk_lastForm"></input>
				</div>
			</form>
		</div>
	);
};

export default ProdukForm;
