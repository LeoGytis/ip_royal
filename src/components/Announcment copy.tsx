import { useEffect, useState } from "react";
import fetchData from "./FetchData";

interface ApiResponse {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
}

interface Product {
  id: number;
  title: string;
  description: string;
  rating: number;
  price: number;
}

const Announcement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortOption, setSortOption] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setIsLoading(true);
    setError(null);

    fetchData<ApiResponse>(
      "https://dummyjson.com/products/category/smartphones"
    ).then((response) => {
      if (response.data && response.data.products) {
        setProducts(response.data.products);
      } else if (response.error) {
        setError("Error fetching data. Please try again.");
      }
      setIsLoading(false);
    });
  };

  const sortProducts = (option: string) => {
    let sortedProducts: Product[] = [...products];

    if (option === "rating") {
      sortedProducts = sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (option === "price") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "title") {
      sortedProducts = sortedProducts.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    setSortOption(option);
    setProducts(sortedProducts);
  };

  return (
    <div className="font-medium rounded-lg border border-gray-300">
      <div className="p-4">
        <div className="flex justify-between pb-4">
          <h1 className="font-semibold">Announcement</h1>
          <div className="flex">
            <button
              onClick={fetchProducts}
              className="text-xs rounded-lg text-gray-400 border border-gray-200 py-1 px-3 mr-3"
            >
              Refresh
            </button>
            <div className="flex items-center gap-4 text-xs rounded-lg text-gray-400 border border-gray-200 py-1 px-3">
              <span>Sort by:</span>
              <select
                value={sortOption || ""}
                onChange={(e) => sortProducts(e.target.value)}
                className="bg-transparent"
              >
                <option value="title">Title</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {products?.map((product) => (
              <div
                key={product.id}
                className="flex flex-col rounded-lg border border-gray-200 bg-gray-50 py-2 px-4 m-4"
              >
                <div className="flex justify-between mb-10">
                  <h2>{product.title}</h2>
                  <p>Rating: {product.rating}</p>
                  <p>Price: ${product.price}</p>
                </div>
                <p>{product.description}</p>
              </div>
            ))}
          </ul>
        )}
      </div>
      <div className="flex justify-center rounded-b-lg border-t text-[#FF5151] py-2 px-6">
        See All Announcements
      </div>
    </div>
  );
};

export default Announcement;
