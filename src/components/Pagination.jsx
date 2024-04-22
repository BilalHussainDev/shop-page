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

function Pagination({ isPending, error, data, search }) {
	if (isPending || error || search !== "") return "";

	return (
		<Box sx={styles.paginationBox}>
			<MuiPagination
				count={Math.ceil(data.total / data.limit)}
				disabled={false}
				size="large"
				color="secondary"
				sx={styles.pagination}
			/>
		</Box>
	);
}

export default Pagination;
