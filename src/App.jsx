import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsPage } from "src/Pages";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<ProductsPage />
	</QueryClientProvider>
);

export default App;
