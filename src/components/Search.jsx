import { Box, IconButton, Paper } from "@mui/material";

const styles = {
	search: {
		borderRadius: 20,
		border: "1px solid #e3e3e3",
		boxShadow: "none",
		pl: 2,
		display: "flex",
		justifyContent: "space-between",
		width: { xs: "100%", sm: "400px" },
	},

	cross: {
		height: "40px",
		width: "40px",
		margin: "2px",
	},

	searchInput: {
		border: "none",
		outline: "none",
		width: { xs: "80%", sm: "350px" },
	},
};

function Search() {
	return (
		<Paper component="form" onSubmit={() => {}} sx={styles.search}>
			<Box
				component="input"
				sx={styles.searchInput}
				placeholder="search"
				// value=""
				onChange={() => {}}
			/>
			<IconButton sx={styles.cross}>x</IconButton>
		</Paper>
	);
}

export default Search;
