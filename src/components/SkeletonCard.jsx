import { Box, Skeleton, Stack } from "@mui/material";

const styles = {
	card: {
		borderRadius: "8px",
		backgroundColor: "#1e1e1e",
		gap: "7px",
		overflow: "hidden",
	},

	cardContent: {
		padding: "16px 16px 20px 16px",
	},

	flexbox: {
		display: "flex",
		justifyContent: "space-between",
		mb: "8px",
	},

	skeleton: {
		backgroundColor: "#343434",
	},
};

function ProductCard() {
	return (
		<Stack sx={styles.card}>
			{/* Rectangle to replace Image */}
			<Skeleton
				variant="rectangular"
				width="100%"
				height="140px"
				sx={styles.skeleton}
			/>

			<Box sx={styles.cardContent}>
				<Box sx={styles.flexbox}>
					{/* Bar to replace Rating */}
					<Skeleton width="45%" height="24px" sx={styles.skeleton} />

					{/* Bar to replace Price */}
					<Skeleton width="12%" height="22px" sx={styles.skeleton} />
				</Box>

				{/* Bar to replace Title */}
				<Skeleton
					width="70%"
					height="22px"
					mb="2px"
					sx={styles.skeleton}
				/>
			</Box>
		</Stack>
	);
}

export default ProductCard;
