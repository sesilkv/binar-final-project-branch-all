import React from "react";
import Header from "./RegisterHeader";
import Image from "./RegisterImage";
import Form from "./RegisterForm";
import "./Register.css";

const register = () => {
	return (
		<div>
			<div className="register_container">
				<section className="arrow d-md-none">
					<Header />
				</section>
				<div className="main_register row">
					<Image />
					<Form />
				</div>
			</div>
		</div>
	);
};

export default register;

/*

import React from "react";
import "./register.css";

const register = () => {
	return (
		<div>
			<div className="register_container">
				<section className="arrow d-md-none">
					<img
						src="/SVG/arrow_left.svg"
						alt="arrow icon"
						className=" arrow-svg
						"
					/>
				</section>
				<div className="main_register row">
					<div className="login_left col-12 col-lg-auto p-0">
						<img src="/SVG/login_img.svg" className="d-none d-lg-block register_img" alt=" login" />
					</div>
					<div className="register_right col-12 col-lg-4">
						<h2>Daftar</h2>
						<form className="register_form">
							<label className="register_label" htmlFor="nama">
								Nama
							</label>
							<div>
								<input type="text" name="nama" id="nama" required placeholder="Nama Lengkap" className="input_box"></input>
							</div>
							<label className="register_label" htmlFor="nama">
								Email
							</label>
							<div>
								<input type="Email" name="Email" id="Email" required placeholder=" Contoh: johndee@gmail.com" className="input_box"></input>
							</div>
							<label className="register_label" htmlFor="nama">
								Password
							</label>
							<div>
								<input type="Password" name="Password" id="Password" required placeholder="Masukkan password" className="input_box"></input>
							</div>
						</form>
						<button type="submit" className="btn_login mt-5">
							Daftar
						</button>
						<div className="footer">
							<p>
								Sudah punya akun?
								<a href="/register" className="daftar">
									Masuk sini
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default register;


*/
