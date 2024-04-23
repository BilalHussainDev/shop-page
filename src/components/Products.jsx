import { Box, Typography } from "@mui/material";
import { ProductCard, SkeletonCard } from "src/components";

const styles = {
	grid: {
		display: "grid",
		gridTemplateColumns: {
			xs: "repeat(auto-fit, minmax(240px, 1fr))",
			lg: "repeat(4, 1fr)",
		},
		gap: "16px",
		justifyContent: "center",
		mb: "40px",
	},

	message: {
		color: "#fff",
	},
};

function Products({ isPending, error, data }) {
	// if request for products is pending
	if (isPending) {
		return (
			<Box sx={styles.grid}>
				{Array.from(new Array(4)).map((_, index) => (
					<SkeletonCard key={index} />
				))}
			</Box>
		);
	}

	// if request for products gives error
	if (error) {
		return (
			<Typography sx={styles.message}>
				An error has occurred: {error.message}
			</Typography>
		);
	}

	// if request for products gives empty array
	if (data.products.length <= 0) {
		return <Typography sx={styles.message}>No Results. 😔</Typography>;
	}

	// if request for products gives Products Successfully
	return (
		<Box sx={styles.grid}>
			{data.products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</Box>
	);
}

export default Products;
