import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, IconButton, Paper } from "@mui/material";
import { ProductService } from "src/services";

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
	const [search, setSearch] = useState("");

	const { isPending, error, data } = useQuery({
		queryKey: ["productsData", { search }],
		queryFn: () => ProductService.getSearchedProducts(search),
		staleTime: Infinity,
	});

	// if (isPending) return <Box sx={{ color: "#fff" }}>Loading...</Box>;

	// if (error) return "An error has occurred: " + error.message;

	return (
		<Paper component="form" onSubmit={() => {}} sx={styles.search}>
			<Box
				component="input"
				sx={styles.searchInput}
				placeholder="search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onBlur={() => setSearch("")}
			/>
			<IconButton sx={styles.cross} onClick={() => setSearch("")}>
				x
			</IconButton>
		</Paper>
	);
}

export default Search;
