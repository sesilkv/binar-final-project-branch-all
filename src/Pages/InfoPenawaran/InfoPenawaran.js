import React from "react";
import CardPenawaran from "../../Components/Cards/CardPenawaran";
import CardProfile from "../../Components/Cards/CardProfile";
import Nav from "../../Components/Nav/Nav";
import "./InfoPenawaran.css";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { IoArrowBackOutline } from "react-icons/io5";

const InfoPenawaran = () => {
	return (
		<>
			<Nav />
			<Container>
				<Row>
					<a href="/notification" className="back">
						<IoArrowBackOutline />
					</a>
					<Col lg={7} className="mx-auto">
						<CardProfile />
					</Col>
				</Row>
				<Row>
					<Col className="mx-auto mt-4" lg={7}>
						<h6>Daftar Produkmu yang Ditawar</h6>
						<CardPenawaran />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default InfoPenawaran;
