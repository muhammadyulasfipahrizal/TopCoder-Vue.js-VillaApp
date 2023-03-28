<template>
  <div class="container">
      <div class="property-column">
        <p class="property">Villa Image</p>
      </div>
      <div class="property-column">
        <p class="property">Villa Name</p>
      </div>
      <div class="property-column">
        <p class="property">Location</p>
      </div>
      <div class="property-column">
        <p class="property">Price</p>
      </div>
      <div class="property-column">
        <p class="property">Capacity</p>
      </div>
      <div class="property-column">
        <p class="property">Facilities</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RowsComponent',
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  margin-top: 15px;
  padding: 5px;
}

.villa-image {
  max-width: 50%;
  height: auto;
  justify-self: center;
}

.btn-book {
  max-width: 100%;
  height: auto;
  justify-self: center;
}

.property-column {
  display: flex;
  flex-direction: column;
}

.property {
  font-weight: bold;
}

.property-value {
  margin: 0;
}
</style>
