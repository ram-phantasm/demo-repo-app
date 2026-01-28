import { useAddToCartMutation, useFetchProductsQuery } from "./API/service";
import "./App.css";
import ProductList from "./components/ProductList";
import type { ProductModel } from "./model/productModel";

function App() {
  const {
    data,
    isLoading,
    error,
  }: { data?: ProductModel[]; isLoading: boolean; error?: any } =
    useFetchProductsQuery();

  // Fix: Call the hook properly - don't destructure the hook name again
  const [addToCartMutation] = useAddToCartMutation();

  const handleAddtoCart = (product: ProductModel)=> {
    

    // Call the mutation function
    addToCartMutation(product)
      .unwrap()
      .then(() => {
        console.log("Product added to cart successfully");
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  if (isLoading) return <div className="text-center p-8">Loading...</div>;
  if (error)
    return (
      <div className="text-center p-8 text-red-600">Error loading products</div>
    );

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data?.map((product) => (
        <ProductList
          product={product}
          handleAddtoCart={handleAddtoCart}
          key={product.id}
        />
      ))}
    </div>
  );
}

export default App;
