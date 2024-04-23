import { Box, Skeleton, Stack } from "@mui/material";

const styles = {
	card: {
		borderRadius: "8px",
		backgroundColor: "#1e1e1e",
		gap: "7px",
		overflow: "hidden",
	},

	cardImage: {
		display: "flex",
		overflow: "hidden",
	},

	cardContent: {
		color: "#b5b5b5",
		padding: "16px 16px 20px 16px",
	},

	flexbox: {
		display: "flex",
		justifyContent: "space-between",
		mb: "8px",
	},
};

function ProductCard() {
	return (
		<Stack sx={styles.card}>
			<Box sx={styles.cardImage}>
				<Skeleton
					variant="rectangular"
					width="100%"
					height="140px"
					sx={{ backgroundColor: "#343434" }}
				/>
			</Box>

			<Box sx={styles.cardContent}>
				<Box sx={styles.flexbox}>
					<Skeleton
						width="45%"
						height="24px"
						sx={{ backgroundColor: "#343434" }}
					/>
					<Skeleton
						width="12%"
						height="22px"
						sx={{ backgroundColor: "#343434" }}
					/>
				</Box>
				<Skeleton
					width="70%"
					height="22px"
					mb="2px"
					sx={{ backgroundColor: "#343434" }}
				/>
			</Box>
		</Stack>
	);
}

export default ProductCard;
