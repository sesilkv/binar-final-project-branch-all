import React from "react";
import { useDropzone } from "react-dropzone";
import "./profile.css";

const ProfileSubHeader = () => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const InfoFiles = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	return (
		<div className="profile_subHeader_container">
			<div className="profile_header_lg d-none d-lg-block">
				<h3 className="">Lengkapi info account</h3>
			</div>
			<div className="profile_photo_section">
				<div {...getRootProps()} className="profile_dummy_dropzone">
					<input {...getInputProps()} />
					{<p className="text_small text-center mt-5">Or simply drop here</p>}
				</div>
			</div>
			<p className="dropzone_InfoFiles text-center">{InfoFiles}</p>
		</div>
	);
};

export default ProfileSubHeader;

/*

	<div className="profile_dummy_dropzone">
					<img src="/SVG/camera.svg" className="profile_camera_icon" alt="camera" />
				</div>



		<div {...getRootProps({ className: "dropzone disabled" })} className="d-flex justify-content-center profile_dummy_dropzone">
					<input {...getInputProps()} />
					<img src="img/uploadphoto.svg" alt="" />
					{ <p>Drag 'n' drop some files here, or click to select files</p> }
					</div>
					<p>{files}</p>			
*/
