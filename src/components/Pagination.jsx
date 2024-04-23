import { Box, Pagination as MuiPagination } from "@mui/material";

const styles = {
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
};

function Pagination({ isPending, error, page, setPage, limit, totalProducts }) {
	// No pagination if request for products is pending or give error
	if (isPending || error) return "";

	return (
		<Box sx={styles.paginationBox}>
			<MuiPagination
				count={Math.ceil(totalProducts / limit)}
				page={page}
				onChange={(_, value) => setPage(value)}
				disabled={false}
				size="large"
				color="secondary"
				sx={styles.pagination}
			/>
		</Box>
	);
}

export default Pagination;
