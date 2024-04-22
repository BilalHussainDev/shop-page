import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Container } from "@mui/material";
import { Feed, Navbar } from "src/components";
import { ProductService } from "src/services";

function ProductsPage() {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");

	// Request for All Products
	// Run only at initial render
	const {
		isPending: isPendingProducts,
		error: errorProducts,
		data: allProducts,
	} = useQuery({
		queryKey: ["allProducts"],
		queryFn: () => ProductService.getProducts(),
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

	// Final Products Data to display
	const productsData =
		selectedCategory === "all" ? allProducts : productsByCategory;

	console.log(productsData);

	return (
		<Container maxWidth="xl">
			<Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<Feed
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				isPending={isPendingProducts || isPendingProductsByCategory}
				error={errorProducts || errorProductsByCategory}
				data={productsData}
			/>
		</Container>
	);
}

export default ProductsPage;
