import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Container } from "@mui/material";
import { Feed, Navbar } from "src/components";
import { ProductService } from "src/services";

function ProductsPage() {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const limit = 12;
	const skip = limit * (page - 1);

	// Request for All Products
	// Run only at initial render
	const {
		isPending: isPendingProducts,
		error: errorProducts,
		data: allProducts,
	} = useQuery({
		queryKey: ["allProducts", { page }],
		queryFn: () => ProductService.getProducts(skip, limit),
		staleTime: Infinity,
	});

	// Request for Products According to Category
	// Run when Selected Category will change
	const {
		isPending: isPendingProductsByCategory,
		error: errorProductsByCategory,
		data: productsByCategory,
	} = useQuery({
		queryKey: ["productsByCategory", { selectedCategory }],
		queryFn: () => ProductService.getProductsByCategory(selectedCategory),
		staleTime: Infinity,
	});

	// Request for Products According to Search
	// Run when Seach Term will change
	const {
		isPending: isPendingProductsBySearch,
		error: errorProductsBySearch,
		data: productsBySearch,
	} = useQuery({
		queryKey: ["productsBySearch", { search }],
		queryFn: () => ProductService.getProductsBySearch(search),
		staleTime: Infinity,
	});

	// represent a request is pending
	const isPending =
		isPendingProducts ||
		isPendingProductsByCategory ||
		isPendingProductsBySearch;

	// represent error if any
	const error =
		errorProducts || errorProductsByCategory || errorProductsBySearch;

	// Final Products Data to display
	const productsData =
		selectedCategory !== "all"
			? productsByCategory
			: search !== ""
			? productsBySearch
			: allProducts;

	console.log(productsData);

	return (
		<Container maxWidth="xl">
			<Navbar
				search={search}
				setSearch={setSearch}
				setSelectedCategory={setSelectedCategory}
			/>
			<Feed
				isPending={isPending}
				error={error}
				data={productsData}
				search={search}
				setSearch={setSearch}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				page={page}
				setPage={setPage}
				limit={limit}
			/>
		</Container>
	);
}

export default ProductsPage;
