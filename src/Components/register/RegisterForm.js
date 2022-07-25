import React, { useState } from "react";
import "./Register.css";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";

const RegisterForm = () => {
	const { register, handleSubmit, formState } = useForm();

	// jika gagal login maka akan muncul pesan (pakai saat api nya udah kelar):
	const [regisStatus, setRegisStatus] = useState({
		success: false,
		message: "",

		/*

	*/
	});

	// dispatch axios
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//menampilkan data nama,email,password

	const formSubmithandler = (data) => {
		console.log(data);

		const postData = {
			name: data.user_name,
			email: data.user_email,
			password: data.user_password,
		};

		axios
			.post("https://finalsecondhand-staging.herokuapp.com/auth/sign-up", postData) // kalau dah ready taruh link heroku disini
			.then((res) => {
				console.log(res);
				navigate("/login");
			})

			// failed register notification
			.catch((err) => {
				//	console.log(err.response);
				setRegisStatus({
					success: false,
					message: "Failed to make Account, Please try again later",
				});
			});
	};

	return (
		<div className="register_form_container register_right col-12 col-lg-4 m">
			<h2 className="">Daftar</h2>
			<form className="register_form" onSubmit={handleSubmit(formSubmithandler)}>
				<div>
					<label className="register_label name" htmlFor="user_name">
						Name
					</label>
					<div>
						<input type="text" name="user_name" id="user_name" required placeholder="Nama Lengkap" className="input_box" {...register("user_name")}></input>
						<p>{formState.errors.user_name?.type === "required"}</p>
					</div>
				</div>
				<div>
					<label className="register_label email" htmlFor="email">
						Email
					</label>
					<div>
						<input type="email" name="user_email" id="user_email" required placeholder=" Contoh: johndee@gmail.com" className="input_box" {...register("user_email")}></input>
					</div>
					<p>{formState.errors.user_email?.type === "required"}</p>
				</div>
				<div>
					<label className="register_label" htmlFor="user_password">
						Password
					</label>
					<div>
						<input type="password" name="user_password" id="user_password" required="password" placeholder="Masukkan password" className="input_box" {...register("user_password")}></input>
						<FiEye className="register_icon" />
						<p>{formState.errors.user_password?.type === "required"}</p>
					</div>
				</div>
				<button type="submit" className="btn_register mt-5">
					Daftar
				</button>
				{!regisStatus.success && regisStatus.message && <p className="text-danger  m-0 ">{regisStatus.message}</p>}
			</form>
			<div className="footer">
				<p>
					Sudah punya akun?
					<Link to="/login" className="daftar">
						Masuk sini
					</Link>
				</p>
			</div>
		</div>
	);
};

export default RegisterForm;
