import { Stack } from "@mui/material";
import { useState } from "react";

const categories = [
	"smartphones",
	"laptops",
	"fragrances",
	"skincare",
	"groceries",
	"home-decoration",
	"furniture",
	"tops",
	"womens-dresses",
	"womens-shoes",
	"mens-shirts",
	"mens-shoes",
	"mens-watches",
	"womens-watches",
	"womens-bags",
	"womens-jewellery",
	"sunglasses",
	"automotive",
	"motorcycle",
	"lighting",
];

const styles = {
	sidebar: {
		overflowY: "auto",
		flexDirection: { xs: "row", md: "column" },
		mb: { xs: 0, md: 2 },
	},
};

function Sidebar() {
	const [selectedCategory, setSelectedCategory] = useState("all");

	return (
		<Stack sx={styles.sidebar}>
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
			{categories.map((category) => (
				<button
					key={category}
					onClick={() => setSelectedCategory(category)}
					className="category-btn"
					style={{
						background: category === selectedCategory && "#9c23d5",
					}}
				>
					{category.split("-").join(" ")}
				</button>
			))}
		</Stack>
	);
}

export default Sidebar;
