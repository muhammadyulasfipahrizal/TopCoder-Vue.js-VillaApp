<template>
  <div class="container">
    <p class="property">Villa Name</p>
    <p class="property">Location</p>
    <p class="property">Price</p>
    <p class="property">Capacity</p>
    <p class="property">Facilities</p>
  </div>
</template>

<script>
export default {
  name: 'ListProperty',

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 15px;
}

.property {
    margin-right: 80px;
    margin-left: -10px;
}

</style>
