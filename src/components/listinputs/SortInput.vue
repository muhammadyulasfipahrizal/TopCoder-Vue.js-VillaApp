<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="loadNumberDropdown" data-bs-toggle="dropdown" aria-expanded="false">
      Sort
    </button>
    <ul class="dropdown-menu" aria-labelledby="loadNumberDropdown">
      <li><a class="dropdown-item" href="#" @click="setSortOrder('ascending')">Ascending</a></li>
      <li><a class="dropdown-item" href="#" @click="setSortOrder('descending')">Descending</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SortInput",

  methods: {
    setSortOrder(order) {
      this.$emit("updateSortOrder", order);
    },
  },
};
</script>
