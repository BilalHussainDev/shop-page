import { Box, Rating, Stack, Typography } from "@mui/material";

const styles = {
	card: {
		borderRadius: "8px",
		backgroundColor: "#1e1e1e",
		gap: "7px",
		overflow: "hidden",
		height: "260px",
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
	},

	rating: {
		"& .MuiSvgIcon-root": {
			color: "#faaf00",
		},
	},
};

function ProductCard({ product }) {
	return (
		<Stack sx={styles.card} key={product.id}>
			<Box sx={styles.cardImage}>
				<img
					width="100%"
					height="140px"
					src={product.thumbnail}
					alt={product.title}
					style={{ objectFit: "cover" }}
				/>
			</Box>

			<Box sx={styles.cardContent}>
				<Box sx={styles.flexbox}>
					<Rating
						name="half-rating-read"
						defaultValue={product.rating}
						precision={0.5}
						size="small"
						readOnly
						sx={styles.rating}
					/>
					<Typography variant="caption" component="p" mb="11px">
						{product.price} $
					</Typography>
				</Box>
				<Typography variant="subtitle2" mb="2px">
					{product.title}
				</Typography>
			</Box>
		</Stack>
	);
}

export default ProductCard;
