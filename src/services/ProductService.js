import axios from "axios";

const API = axios.create({
	baseURL: import.meta.env.VITE_HOST_API,
});

const getProducts = async (skip = 0, limit = 10) => {
	console.log("Getting Products");
	const response = await API.get(`/products?skip=${skip}&limit=${limit}`);
	return response.data;
};

const getCategories = async () => {
	console.log("Getting Categories");
	const response = await API.get(`/products/categories`);
	return response.data;
};

const getProductsByCategory = async (category) => {
	console.log("Getting Products by category " + category);
	const response = await API.get(`/products/category/${category}`);
	return response.data;
};

const getProductsBySearch = async (search) => {
	console.log("Getting Products for query " + search);
	const response = await API.get(`/products/search?q=${search}`);
	return response.data;
};

const ProductService = {
	getProducts,
	getCategories,
	getProductsByCategory,
	getProductsBySearch,
};

export default ProductService;
