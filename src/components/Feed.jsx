import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Products } from "src/components";

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

	copyright: {
		color: "#fff",
		backgroundColor: "rgba(0, 0, 0)",
		mt: 1.5,
		p: "8px 0 8px 16px",
		position: "sticky",
		bottom: "0",
		display: { xs: "none", md: "block" },
	},

	products: {
		overflowY: "auto",
		flex: 2,
		padding: { xs: "8px 0", md: "16px 12px 16px 24px" },
	},
};

function Feed() {
	return (
		// It contains two parts, sidebar and products
		<Stack component="section" sx={styles.feeds}>
			{/* Box for sidebar */}
			<Box sx={styles.sidebar}>
				<Sidebar />

				<Typography variant="body2" sx={styles.copyright}>
					CopyRight © {new Date().getFullYear()}
				</Typography>
			</Box>

			{/* Box for products */}
			<Box p={2} sx={styles.products}>
				<Products />
			</Box>
		</Stack>
	);
}

export default Feed;
