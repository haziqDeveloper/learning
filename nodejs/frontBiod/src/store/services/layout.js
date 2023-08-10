/** @format */
import { getImageAPI} from "../api";
import Instance from "../axios";

const API_URL = process.env.REACT_APP_API;

const getImage = async (data) => {
	try {
		const response = await Instance.get(API_URL + getImageAPI, data);
		return response;
	} catch (error) {
		throw error;
	}
};


export {
	getImage,
};
