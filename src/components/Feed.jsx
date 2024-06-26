import { Box, Stack } from "@mui/material";
import { Sidebar, Products, Pagination } from "src/components";

const styles = {
	feeds: {
		height: "calc(100vh - 80px)",
		flexDirection: { xs: "column", md: "row" },
	},

	sidebar: {
		borderRight: "1px solid #3d3d3d",
		overflowY: "auto",
		pr: { xs: 0, md: 2 },
		pt: { xs: 0, md: 2 },
		position: "relative",
		mb: { xs: 2, md: 0 },
	},

	products: {
		overflowY: "auto",
		flex: 2,
		padding: { xs: "8px 0", md: "16px 12px 16px 24px" },
	},
};

function Feed({
	isPending,
	error,
	data,
	selectedCategory,
	setSelectedCategory,
	page,
	setPage,
	limit,
}) {
	return (
		// It contains two parts, sidebar and products
		<Stack component="section" sx={styles.feeds}>
			{/* Box for sidebar */}
			<Box sx={styles.sidebar}>
				<Sidebar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
			</Box>

			{/* Box for products */}
			<Box p={2} sx={styles.products}>
				<Products isPending={isPending} error={error} data={data} />

				<Pagination
					isPending={isPending}
					error={error}
					page={page}
					setPage={setPage}
					limit={limit}
					totalProducts={data?.total}
				/>
			</Box>
		</Stack>
	);
}

export default Feed;
