  <template>
    <div>
      <button class="btn btn-secondary" type="button" @click="showModal = true">Book Now</button>
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
                <p>{{ booking.location }}</p>
              </div>
              <div class="col-md-6">
                <h5>Capacity:</h5>
                <p>{{ booking.capacity }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h5>Name:</h5>
                <p>{{ booking.name }}</p>
              </div>
              <div class="col-md-6">
                <h5>Price:</h5>
                <p>{{ booking.price }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h5>Facilities:</h5>
                <p>{{ booking.facility }}</p>
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
  </template>
  
  <script>
  import VillaData from '../rows/VillaData';

  export default {
    data() {
      return {
        showModal: false,
        villas: VillaData,
        booking: {
          name: VillaData.name,
          location: VillaData.location,
          capacity: VillaData.capacity,
          price: VillaData.price,
          facility: VillaData.facility,
        },
      };
    },
    methods: {
      bookNow() {
        // Code to confirm booking
        this.showModal = false;
      },
    },
  };
  </script>

  <style scoped>
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