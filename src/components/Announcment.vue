<template>
  <div class="font-medium rounded-lg border border-gray-300">
    <div class="p-4">
      <div class="flex justify-between pb-4">
        <h1 class="font-semibold">Announcement</h1>
        <div class="flex">
          <button @click="fetchProducts" class="text-xs rounded-lg text-gray-400 border border-gray-200 py-1 px-3 mr-3">
            Refresh
          </button>
          <div class="flex items-center gap-4 text-xs rounded-lg text-gray-400 border border-gray-200 py-1 px-3">
            <span>Sort by:</span>
            <select v-model="sortOption" @change="sortProducts" class="bg-transparent">
              <option value="title">Title</option>
              <option value="rating">Rating</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p v-if="isLoading">Loading...</p>
      <p v-if="error">{{ error }}</p>
      <ul v-else>
        <li v-for="product in products" :key="product.id">
          <div class="flex flex-col rounded-lg border border-gray-200 bg-gray-50 py-2 px-4 m-4">
            <div class="flex justify-between mb-10">
              <h2>{{ product.title }}</h2>
              <p>Rating: {{ product.rating }}</p>
              <p>Price: ${{ product.price }}</p>
            </div>
            <p>{{ product.description }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex justify-center rounded-b-lg border-t text-[#FF5151] py-2 px-6">
      See All Announcements
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isLoading: true,
      sortOption: null,
      error: null,
    };
  },
  methods: {
    fetchProducts() {
      this.isLoading = true;
      this.error = null;

      // Replace the API call with your Vue.js equivalent (e.g., Axios or Vue Resource)
      // You can use Vue's built-in functions to make HTTP requests.

      // Example:
      // axios.get("https://dummyjson.com/products/category/smartphones")
      //   .then(response => {
      //     if (response.data && response.data.products) {
      //       this.products = response.data.products;
      //     } else if (response.error) {
      //       this.error = "Error fetching data. Please try again.";
      //     }
      //     this.isLoading = false;
      //   });
    },
    sortProducts() {
      let sortedProducts = [...this.products];

      if (this.sortOption === "rating") {
        sortedProducts = sortedProducts.sort((a, b) => b.rating - a.rating);
      } else if (this.sortOption === "price") {
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
      } else if (this.sortOption === "title") {
        sortedProducts = sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      }

      this.products = sortedProducts;
    },
  },
};
</script>
