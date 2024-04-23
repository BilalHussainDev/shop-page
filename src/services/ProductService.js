import axios from "axios";

// create an instance of axios
const API = axios.create({
	baseURL: import.meta.env.VITE_HOST_API,
});

// Fetch All Categories Names
const getCategories = async () => {
	const response = await API.get(`/products/categories`);
	return response.data;
};

// Fetch Products according to Category
const getProductsByCategory = async (category) => {
	const response = await API.get(`/products/category/${category}`);
	return response.data;
};

// Fetch Products according to Search
const getProductsBySearch = async ({ search, skip = 0, limit = 10 }) => {
	const response = await API.get(
		`/products/search?q=${search}&skip=${skip}&limit=${limit}`
	);
	return response.data;
};

// Wrap All functions into an object
const ProductService = {
	getCategories,
	getProductsByCategory,
	getProductsBySearch,
};

export default ProductService;
