import { useQuery } from "@tanstack/react-query";
import { Stack } from "@mui/material";
import { ProductService } from "src/services";

const styles = {
	sidebar: {
		minWidth: { xs: "100%", md: "152px" },
		overflowY: "auto",
		flexDirection: { xs: "row", md: "column" },
		mb: { xs: 0, md: 2 },
	},
};

function Sidebar({ selectedCategory, setSelectedCategory, setSearch }) {
	// Fetch titles of all Categories
	// Run only once
	const { data: categories } = useQuery({
		queryKey: ["categories"],
		queryFn: () => ProductService.getCategories(),
		staleTime: Infinity,
	});

	return (
		<Stack sx={styles.sidebar} onClick={() => setSearch("")}>
			<button
				onClick={() => setSelectedCategory("all")}
				className="category-btn"
				style={{
					background: selectedCategory === "all" && "#9c23d5",
					color: "#fff",
				}}
			>
				All
			</button>
			{categories &&
				categories.map((category) => (
					<button
						key={category}
						onClick={() => setSelectedCategory(category)}
						className="category-btn"
						style={{
							background:
								category === selectedCategory && "#9c23d5",
						}}
					>
						{category.split("-").join(" ")}
					</button>
				))}
		</Stack>
	);
}

export default Sidebar;
