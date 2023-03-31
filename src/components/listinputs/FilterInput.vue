// a nested bootstrap filter dropdown menu

<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="filterDropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
      Filter
    </button>
    <ul class="dropdown-menu" aria-labelledby="filterDropdownButton">
      <li>
        <select class="form-select" aria-label="Location filter">
            <option selected disabled value="">Location</option>
            <option value="new-york">Kalimantan</option>
            <option value="los-angeles">Java</option>
            <option value="chicago">Bali</option>
        </select>
      </li>
      <li>
        <select class="form-select" aria-label="Price filter">
            <option selected disabled value="">Price</option>
            <option value="low-to-high">Rp. 100.000 - 200.000</option>
            <option value="high-to-low">Rp. 200.000 - 300.000</option>
        </select>
      </li>
      <li>
        <select class="form-select" aria-label="Color filter">
            <option selected disabled value="">Capacity</option>
            <option value="red">2-4 People</option>
            <option value="blue">4-6 People</option>
            <option value="green">6-8 People</option>
        </select>
      </li>
    </ul>
  </div>  
</template>

<script>
export default {
  name: "FilterInput",
};
</script>

<style scoped>
.dropdown-toggle {
  background-color: #7c7d83;
  color: #fff;
}
</style>
