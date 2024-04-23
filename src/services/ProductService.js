import axios from "axios";

// create an instance of axios
const API = axios.create({
	baseURL: import.meta.env.VITE_HOST_API,
});

// Fetch All Products
const getProducts = async (skip = 0, limit = 10) => {
	const response = await API.get(`/products?skip=${skip}&limit=${limit}`);
	return response.data;
};

// Fetch All Categories Names
const getCategories = async () => {
	const response = await API.get(`/products/categories`);
	return response.data;
};

// Fetch Products with respect to Category
const getProductsByCategory = async (category) => {
	const response = await API.get(`/products/category/${category}`);
	return response.data;
};

// Fetch Products with respect to Search
const getProductsBySearch = async (search) => {
	const response = await API.get(`/products/search?q=${search}`);
	return response.data;
};

// Wrap All functions into an object
const ProductService = {
	getProducts,
	getCategories,
	getProductsByCategory,
	getProductsBySearch,
};

export default ProductService;
