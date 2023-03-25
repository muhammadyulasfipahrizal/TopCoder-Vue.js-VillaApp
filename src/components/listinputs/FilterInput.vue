<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="loadNumberDropdown" data-bs-toggle="dropdown" aria-expanded="false">
      Filter
    </button>
    <ul class="dropdown-menu" aria-labelledby="loadNumberDropdown">
      <li><a class="dropdown-item" href="#" @click="setLoadNumber('location')">Location</a></li>
      <li><a class="dropdown-item" href="#" @click="setLoadNumber('facilities')">Facilities</a></li>
      <li><a class="dropdown-item" href="#" @click="setLoadNumber('price')">Price</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilterInput",

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
