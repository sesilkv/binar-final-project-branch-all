import React, { useEffect, useState, useRef } from "react";
import "./Profile.css";
import axios from "axios";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import userSlice from "../../store/UserSlice";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { useDropzone } from "react-dropzone";

const ProfileForm = () => {
	// dropzone
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const InfoFiles = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	const [ProfileData, setData] = useState({
		name: "",
		city_id: "",
		address: "",
		no_hp: "",
		profile_pict: [],
	});

	const [loadingData, setLoadingData] = useState(true);

	const handleChange = (e) => {
		setData({ ...ProfileData, [e.target.name]: e.target.value });
	};

	// error disini :
	//const profile_user = {useSelector((state) => state.auth)};
	//	const profile_user = {useSelector((state) => state.auth)};

	const profile_user = localStorage.getItem("secondHandToken");
	//console.log(token_profile);

	var DecodingJWT = jwtDecode(profile_user);

	// 	var DecodingJWT = jwtDecode(profile_user, token_profile);
	// 	var DecodingJWT = jwtDecode(token_profile);
	// 	var DecodingJWT = jwtDecode(profile_user);

	useEffect(() => {
		setLoadingData(false);
		axios.get(`https://finalsecondhand-staging.herokuapp.com/user/${DecodingJWT}`).then((res) => {
			setLoadingData(false);
			setData(res.data);
		});
	}, []);

	const inputNama = useRef();
	const inputKota = useRef();
	const inputAlamat = useRef();
	const inputHandphone = useRef();

	// Put methode
	const formSubmithandler = async (event) => {
		event.preventDefault();

		let FilledForm = false;

		//validasi dan sanitasi
		if (inputNama.current.value !== "" && inputKota !== "" && inputAlamat !== "" && inputHandphone !== "") {
			FilledForm = true;
		}

		if (FilledForm) {
			const submittedData = {
				name: inputNama.current.value,
				city_id: inputKota.current.value,
				address: inputAlamat.current.value,
				no_hp: inputHandphone.current.value,
				profile_pict: acceptedFiles[0],
			};

			/*
			const header = {
				"Content-Type": "multipart/form-data",
				Authorization: profile_user,
			};

			*/

			const up = await axios({
				method: "put",
				url: "https://finalsecondhand-staging.herokuapp.com/user/update",
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: profile_user,
				},
				data: submittedData,
			});
		} else {
			console.error();
		}
	};

	return (
		<>
			<div className="profile_header_lg d-none d-lg-block">
				<h3 className="">Lengkapi info account</h3>
			</div>
			<div className="profile_form_container">
				<form className="profile_register_form" onSubmit={formSubmithandler}>
					<div className="profile_subHeader_container">
						<div className="profile_photo_section">
							<div {...getRootProps()} className="profile_dummy_dropzone" name="user_pict" id="user_pict">
								<input {...getInputProps()} name="user_pict" id="user_pict" onChange={handleChange} />
								<img src={ProfileData.foto_profil ? ProfileData.foto_profil : ""} alt="" />

								{<p className="text_small text-center mt-5">Or simply drop here</p>}
							</div>
						</div>

						<p className="dropzone_InfoFiles text-center">{InfoFiles}</p>
					</div>
					<label className="profile_label text_small" htmlFor="user_name">
						Nama
					</label>
					<div>
						<input type="text" name="user_name" id="user_name" required placeholder=" Nama Lengkap" className="profile_input_box" ref={inputNama} value={ProfileData.nama} onChange={handleChange}></input>
					</div>
					<label className="profile_label text_small" htmlFor="user_city">
						Kota
					</label>
					<div className="select_container">
						<select id="user_city" className="select_border" ref={inputKota} value={ProfileData.kota} onChange={handleChange}>
							<option disabled>Pilih Kota</option>
							<option value="1">1</option>
							<option value="2">2</option>
						</select>
					</div>
					<label className="profile_label" htmlFor="user_address">
						Alamat
					</label>
					<div>
						<input type="text" name="user_address" id="user_address" required placeholder=" contoh alamat" className="profile_input_box" ref={inputAlamat} value={ProfileData.alamat} onChange={handleChange}></input>
					</div>
					<label className="profile_label text_small" htmlFor="user_phone">
						No Handpone
					</label>
					<div>
						<input type="number" name="user_phone" id="user_phone" required placeholder=" contoh: +628123456789" className="profile_input_box" ref={inputHandphone} value={ProfileData.telp} onChange={handleChange}></input>
					</div>
					<button type="submit" className="btn_profile_submit mt-5">
						Simpan
					</button>
				</form>
			</div>
		</>
	);
};

export default ProfileForm;

/*

	.then((res) => {
				console.log(res);
				const user = jwtDecode(res.data.token);
				axios.get(`https://finalsecondhand-staging.herokuapp.com/User/DetailUser${user.sub}`).then((res) => {
					dispatch(
						userSlice.actions.addUser({
							userData: res.data,
						})
					);
					// jika sudah update maka diarahkan ke :
					navigate("/daftarjual");
				});

*/
