<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="filterDropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
      Filter
    </button>
    <ul class="dropdown-menu" aria-labelledby="filterDropdownButton">
      <li>
        <select class="form-select" aria-label="Location filter" @change="applyFilters">
          <option selected disabled value="">Location</option>
          <option value="Kalimantan">Kalimantan</option>
          <option value="Java">Java</option>
          <option value="Bali">Bali</option>
          <option value="Nusa Tenggara">Nusa Tenggara</option>
          <option value="Bangka Belitung">Bangka Belitung</option>
        </select>
      </li>
      <li>
        <select class="form-select" aria-label="Price filter" @change="applyFilters">
          <option selected disabled value="">Price</option>
          <option value="Rp. 100.000 - 200.000">Rp. 100.000 - 200.000</option>
          <option value="Rp. 200.000 - 400.000">Rp. 200.000 - 400.000</option>
          <option value="Rp. 500.000 - 600.000">Rp. 500.000 - 600.000</option>
        </select>
      </li>
      <li>
        <select class="form-select" aria-label="Capacity filter" @change="applyFilters">
          <option selected disabled value="">Capacity</option>
          <option value="2-4 People">2-4 People</option>
          <option value="4-6 People">4-6 People</option>
          <option value="6-8 People">6-8 People</option>
          <option value="8-10 People">8-10 People</option>
        </select>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilterInput",
  data() {
    return {
      selectedLocation: '',
      selectedPrice: '',
      selectedCapacity: '',
    };
  },
  methods: {
    applyFilters() {
      this.$emit(this.selectedLocation);
      this.$emit(this.selectedPrice);
      this.$emit(this.selectedCapacity);
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
