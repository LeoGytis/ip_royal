// import axios from "axios";

// const baseUrl = "https://dummyjson.com/products/category/";

// export const fetchProducts = async (category) => {
//   const url = baseUrl + category;

//   try {
//     const response = await axios.get(url);
//     return response.data.products || [];
//   } catch (error) {
//     throw new Error("Error fetching data. Please try again.");
//   }
// };
const baseUrl = "https://dummyjson.com/products/category/";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface FetchDataOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: string | FormData | null;
}

export async function fetchData<T>(
  url: string,
  options: FetchDataOptions = {}
): Promise<{ data?: T, error?: string }> {
  const { method = "GET", headers = {}, body } = options;

  try {
    const response = await fetch(baseUrl + url, {
      method,
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const data: T = await response.json();
    return { data };
  } catch (error) {
    return { error: "Error fetching data. Please try again." };
  }
}
