import React from "react";
import "./account.css";

const settingAccount = () => {
	// setting dropzone

	return (
		<>
			<div className="container-fluid login_container ">
				<header>
					<h3 className="">Akun saya</h3>
				</header>
				<div className="photo_section mb-5">
					<div className="dummy_dropzone">
						<img src="/SVG/camera.svg" className="camera_icon" alt="camera" />
					</div>
				</div>
				<div className="row">
					<img src="/SVG/pen.svg" className="col-auto account_icon" alt="pen icon" />
					<p className="col-10 side_text mt-2">Ubah Akun</p>
				</div>
				<hr></hr>
				<div className="row">
					<img src="/SVG/fi_settings.svg" className="col-auto account_icon" alt="setting icon" />
					<p className="col-10 side_text mt-2 ">Pengaturan Akun</p>
				</div>
				<hr></hr>
				<div className="row">
					<img src="/SVG/log_out.svg" className="col-auto account_icon" alt="log out icon" />
					<p className="col-10 side_text mt-2">Keluar</p>
				</div>
				<hr></hr>
				<footer className="text-center account_footer">Version 1.0.0</footer>
			</div>
		</>
	);
};

export default settingAccount;
