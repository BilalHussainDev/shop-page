import { Box, Typography } from "@mui/material";
import { ProductCard } from "src/components";

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
	if (isPending) {
		return <Box sx={styles.message}>Loading...</Box>;
	}

	if (error) {
		return (
			<Typography sx={styles.message}>
				An error has occurred: {error.message}
			</Typography>
		);
	}

	if (data.products.length <= 0) {
		return <Typography sx={styles.message}>No Results. 😔</Typography>;
	}

	return (
		<Box sx={styles.grid}>
			{data.products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</Box>
	);
}

export default Products;
