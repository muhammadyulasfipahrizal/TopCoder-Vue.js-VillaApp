<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="basic-addon2"
      v-model="searchTerm"
      @input="updateSearchTerm"
    />
    <button class="btn btn-outline-secondary" type="button" @click="search">
      Search
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchInput",

  data() {
    return {
      searchTerm: "",
    };
  },

  methods: {
    updateSearchTerm() {
      this.$emit("update-search-term", this.searchTerm);
    },

    search() {
      this.$emit("search");
    },
  },
};
</script>

<style scoped>
/* Optional styling for the search input */
</style>
