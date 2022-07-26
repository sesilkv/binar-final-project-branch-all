import axios from "axios";
import { store } from "../src/store/store";

let BASE_URL = "#";

export { BASE_URL };

const requestAPI = () => {
	const token = store.getState().user.data?.token;
	const authorization = token ? { Authorization: token } : {};
	console.log(token);

	return axios.create({
		baseURL: BASE_URL,
		headers: authorization,
	});
};

export default requestAPI;
