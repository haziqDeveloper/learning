/** @format */
import { postRegisterAPI, postLoginAPI } from "../api";
import Instance from "../axios";

const API_URL = process.env.REACT_APP_API;

const postRegister = async (data) => {
	try {
		const response = await Instance.post(API_URL + postRegisterAPI, data);
		return response;
	} catch (error) {
		throw error;
	}
};

const postLogin = async (data) => {
	try {
		const response = await Instance.post(API_URL + postLoginAPI, data);
		return response;
	} catch (error) {
		throw error;
	}
};

export {
	postRegister,
	postLogin,
};
