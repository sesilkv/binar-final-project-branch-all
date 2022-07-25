import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Diminati from "./Pages/Diminati/SellerDiminati";
import Notif from "./Pages/Notif/Notif";

import Register from "./Pages/Register/Register";
import Auth from "./Pages/Auth/auth";
import Account from "./Pages/Account/Account";
import Profile from "./Pages/Profile/Profile";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Terjual from "./Pages/Terjual/Terjual";

import Hobi from "./Components/ProductHome/Hobi";
import Kendaraan from "./Components/ProductHome/Kendaraan";
import Elektronik from "./Components/ProductHome/Elektronik";
import Fashion from "./Components/ProductHome/Fashion";
// import Diminati from './Pages/Diminati/Diminati'

import Buyer from "./Pages/Buyer/Buyer";
import InfoPenawaran from "./Pages/InfoPenawaran/InfoPenawaran";
import Seller from "./Pages/Seller/Seller";
import Login from "./Pages/Login/Logins";
import DaftarJual from "./Pages/DaftarJual/DaftarJual";
import InfoProduk from "./Pages/InfoProduk/InfoProduk";
import Logout from "./Components/Login/Logout";
import Protected from "./Components/HOC/Protected";
import Unprotected from "./Components/HOC/Unprotected";

// Unprotected = Error

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/logout" element={<Logout />} />

				<Route path="/" element={<Unprotected />}>
					<Route path="/login" element={<Login />}></Route>
				</Route>

				{/* UNPROTECTED */}
				<Route path="/" element={<Unprotected />}>
					<Route path="register" element={<Register />}></Route>
				</Route>

				{/* PROTECTED */}
				<Route path="/" element={<Protected />}>
					<Route path="profile" element={<Profile />} />
				</Route>
				<Route path="/" element={<Protected />}>
					<Route path="notification" element={<Notif />} />
				</Route>
				<Route path="/" element={<Protected />}>
					<Route path="infoProduk" element={<InfoProduk />} />
				</Route>
				<Route path="/" element={<Protected />}>
					<Route path="/daftarjual" element={<DaftarJual />}>


					</Route>
					<Route path="semua" />
					<Route path="/diminati" element={<Diminati />} />
					<Route path="/terjual" element={<Terjual />} />
					<Route path="/wishlist" element={<Wishlist />} />
				</Route>
				<Route path="/" element={<Protected />}>
					<Route path="/hobi" element={<Hobi />} />
					<Route path="/kendaraan" element={<Kendaraan />} />
					<Route path="/elektronik" element={<Elektronik />} />
					<Route path="/fashion" element={<Fashion />} />
				</Route>
				{/* <Route path="/" element={<Protected />}> */}
				<Route path="/buyer/:id" element={<Buyer />} />
				<Route path="/infopenawaran" element={<InfoPenawaran />} />
				<Route path="/seller/:id" element={<Seller />} />
				{/* </Route> */}
				<Route path="/" element={<Protected />}>
					<Route path="/account" element={<Account />}></Route>
				</Route>
			</Routes>
		</>
	);
}
