<template>
  <div>
    <div class="container" @dblclick="navigateDetailScreen">
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
      <button class="btn btn-secondary btn-book" type="button" @click="showModal = true">Book</button>
    </div>

    <!-- modal -->
    <div>
      <div class="modal" v-if="showModal">
        <div class="modal-overlay" @click="showModal = false"></div>
        <div class="modal-container">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Booking</h5>
            <button type="button" class="btn-close" @click="showModal = false"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <h5>Location:</h5>
                <p class="property-value">{{ location }}</p>
              </div>
              <div class="col-md-6">
                <h5>Capacity:</h5>
                <p class="property-value">{{ capacity }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h5>Name:</h5>
                <p class="property-value">{{ name }}</p>
              </div>
              <div class="col-md-6">
                <h5>Price:</h5>
                <p class="property-value">{{ price }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h5>Facilities:</h5>
                <p class="property-value">{{ amenities }}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="bookNow">Confirm</button>
            <button type="button" class="btn btn-secondary" @click="showModal = false">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>

export default {
  name: 'RowUi',
  data() {
      return {
        showModal: false,
      };
    },
    watch: {
      showModal(value) {
        console.log('showModal value:', value);
      },
    },
    methods: {
      bookNow() {
        // Code to confirm booking
        this.showModal = false;
      },
      navigateDetailScreen() {
        this.$router.push('/detail');
      }
    },
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
  cursor: pointer;
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
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 600px;
}

.modal-header {
  background-color: #f7f7f7;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.modal-title {
  font-size: 24px;
  line-height: 1.2;
  margin: 0;
}

.modal-subtitle {
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  background-color: #f7f7f7;
  padding: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0069d9;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
}

.btn-secondary:hover {
  background-color: #5a6268;
}
</style>
