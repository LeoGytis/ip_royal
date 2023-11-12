type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestOptions {
  method?: HttpMethod;
  headers?: Headers;
  body?: BodyInit;
}

interface FetchResponse<T> {
  data?: T;
  error?: string;
}

async function getData<T>(
  url: string,
  options?: RequestOptions
): Promise<FetchResponse<T>> {
  try {
    const response = await fetch(url, {
      method: options?.method || "GET",
      headers: options?.headers || new Headers(), // or {} ?
      body: options?.body,
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return { error: "Canot fetch data" };
  }
}

export default getData;
