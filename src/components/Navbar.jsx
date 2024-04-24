import { Box, Stack, IconButton, Paper } from "@mui/material";
import logo from "/vite.svg";

const styles = {
	navbar: {
		height: "80px",
		position: "sticky",
		top: "0",
		zIndex: "100",
		justifyContent: "space-between",
		alignItems: "center",
		px: { xs: "4px", md: "12px" },
		py: 2,
	},

	logoBox: {
		display: { xs: "none", sm: "flex" },
		alignItems: "center",
	},

	searchBox: {
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
		"&.Mui-disabled": {
			opacity: "0",
		},
	},

	searchInput: {
		border: "none",
		outline: "none",
		width: { xs: "80%", sm: "350px" },
	},
};

function Navbar({ search, setSearch, setSelectedCategory }) {
	return (
		<Stack component="nav" direction="row" sx={styles.navbar}>
			<Box sx={styles.logoBox}>
				<img src={logo} alt="Logo" height={45} />
			</Box>

			<Paper component="form" onSubmit={() => {}} sx={styles.searchBox}>
				<Box
					component="input"
					sx={styles.searchInput}
					placeholder="search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={() => setSelectedCategory("all")}
				/>

				<IconButton
					sx={styles.cross}
					disabled={!search}
					onClick={() => setSearch("")}
				>
					x
				</IconButton>
			</Paper>
		</Stack>
	);
}

export default Navbar;
