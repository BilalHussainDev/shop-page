import { Box, Pagination } from "@mui/material";
import { ProductCard } from "src/components";

const styles = {
	grid: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
		gap: "16px",
		justifyContent: "center",
		mb: "40px",
	},
	paginationBox: {
		display: "flex",
		justifyContent: "right",
		mb: "40px",
	},

	pagination: {
		color: "#fff",

		".MuiPaginationItem-root": {
			color: "#d5d5d5",
		},
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
			<Box sx={styles.message}>
				An error has occurred: {error.message}
			</Box>
		);
	}

	return (
		<>
			<Box sx={styles.grid}>
				{data.products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</Box>
			<Box sx={styles.paginationBox}>
				<Pagination
					count={Math.ceil(data.total / data.limit)}
					disabled={false}
					size="large"
					color="secondary"
					sx={styles.pagination}
				/>
			</Box>
		</>
	);
}

export default Products;
