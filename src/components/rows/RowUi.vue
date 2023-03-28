<template>
  <div class="container">
    <img :src="imageUrl" class="villa-image"/>
    <div class="property-column">
      <p class="property-value">{{ name }}</p>
    </div>
    <div class="property-column">
      <p class="property-value">{{ location }}</p>
    </div>
    <div class="property-column">
      <p class="property-value">{{ price }}</p>
    </div>
    <div class="property-column">
      <p class="property-value">{{ capacity }}</p>
    </div>
    <div class="property-column">
      <p class="property-value">{{ amenities }}</p>
    </div>
    <button class="btn btn-secondary btn-book">Book</button>
  </div>
</template>

<script>
export default {
  name: 'RowUi',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    capacity: {
      type: String,
      required: true,
    },
    amenities: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  margin-top: 25px;
  margin-bottom: 50px;
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
