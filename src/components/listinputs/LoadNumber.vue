<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="loadNumberDropdown" data-bs-toggle="dropdown" aria-expanded="false">
      {{ selectedLoadNumber }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="loadNumberDropdown">
      <li><a class="dropdown-item" href="#" @click="setLoadNumber(5)">5</a></li>
      <li><a class="dropdown-item" href="#" @click="setLoadNumber(10)">10</a></li>
      <li><a class="dropdown-item" href="#" @click="setLoadNumber(20)">20</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LoadNumber",

  data() {
    return {
      selectedLoadNumber: 5,
    };
  },

  methods: {
    setLoadNumber(num) {
      this.selectedLoadNumber = num;
      this.$emit("updateLoadNumber", num);
    },
  },
};
</script>

<style scoped>
.dropdown-toggle {
  background-color: #7c7d83;
  color: #fff;
}
</style>
