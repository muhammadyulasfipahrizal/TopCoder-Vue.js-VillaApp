<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="loadNumberDropdown" data-bs-toggle="dropdown" aria-expanded="false">
      Sort
    </button>
    <ul class="dropdown-menu" aria-labelledby="loadNumberDropdown">
      <li><a class="dropdown-item" href="#" @click="setLoadNumber('a-z')">A-Z</a></li>
      <li><a class="dropdown-item" href="#" @click="setLoadNumber('z-a')">Z-A</a></li>
      <li><a class="dropdown-item" href="#" @click="setLoadNumber('cheapest')">Cheapest</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SortInput",

  methods: {
    setLoadNumber(num) {
      this.$emit("updateLoadNumber", num);
    },
  },
};
</script>

<style scoped>
/* Optional styling for the dropdown button */
.dropdown-toggle {
  background-color: #7c7d83;
  color: #fff;
}
</style>
