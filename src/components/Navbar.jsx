import { Box, Stack } from "@mui/material";
import { Search } from "src/components";
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
};

function Navbar() {
	return (
		<Stack component="nav" direction="row" sx={styles.navbar}>
			<Box sx={styles.logoBox}>
				<img src={logo} alt="Logo" height={45} />
			</Box>

			<Search />
		</Stack>
	);
}

export default Navbar;
