import { useEffect, useState } from "react";
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

	// Reset the Page Number when categories or search changes
	useEffect(() => {
		setPage(1);
	}, [selectedCategory, search]);

	// Request for Products According to Category
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
	const {
		isPending: isPendingProductsBySearch,
		error: errorProductsBySearch,
		data: productsBySearch,
	} = useQuery({
		queryKey: ["productsBySearch", { search, page }],
		queryFn: () =>
			ProductService.getProductsBySearch({ search, skip, limit }),
		staleTime: Infinity,
	});

	const isPending = isPendingProductsByCategory || isPendingProductsBySearch;
	const error = errorProductsByCategory || errorProductsBySearch;

	// Final Products Data to display
	// Depending on wether user selected a category or search products
	const productsData =
		selectedCategory !== "all" ? productsByCategory : productsBySearch;

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
