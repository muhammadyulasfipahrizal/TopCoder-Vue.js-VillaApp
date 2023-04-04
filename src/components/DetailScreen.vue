<template>
    <div class="container">
      <button class="btn btn-secondary btn-back" onclick="history.back()">Back</button>
        <div class="img-slider">
            <img src="../assets/logo.png" alt="slider">
            <img src="../assets/logo.png" alt="slider">
            <img src="../assets/logo.png" alt="slider">
        </div>
        <div class="name-image">
            <div class="name">
                <p>John Doe Villa</p>
                <p>Balikpapan, East Kalimantan</p>
                <p>Rp. 125.000</p>
            </div>
            <div class="image">
                <button class="btn btn-secondary btn-image">previous</button>
                <img src="../assets/logo.png" alt="more-image">
                <img src="../assets/logo.png" alt="more-image">
                <img src="../assets/logo.png" alt="more-image">
                <button class="btn btn-secondary btn-image">next</button>
            </div>
        </div>
        <div class="description-features">
            <div class="description">
                <p class="description-text">description <span>capacity: 2-4 people</span></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, 
                  id et! Provident impedit rerum voluptatibus nisi recusandae unde tempora 
                  blanditiis fuga quis velit porro necessitatibus nobis saepe, incidunt 
                  consequuntur officia reiciendis eaque odio perferendis dolorum eius 
                  quos modi quam aliquam. Excepturi molestiae, error tenetur nostrum 
                  architecto consequuntur fuga sint assumenda illo doloremque iste, 
                  veritatis est? Sapiente totam vel mollitia itaque error ipsum officiis 
                  veniam ut at, aliquid, iure, maxime ex odit nostrum eos molestiae 
                  magnam dolores? Expedita nihil suscipit nostrum tenetur dolorum 
                  officia delectus animi dicta quas voluptatum. Cumque eos architecto 
                  exercitationem minima saepe nostrum odit nesciunt veniam quo recusandae!</p>
            </div>
            <div class="features-list">
                <ul>
                    <p>features:</p>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
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
                  <p class="property-value">Balikpapan, East Kalimantan</p>
                </div>
                <div class="col-md-6">
                  <h5>Capacity:</h5>
                  <p class="property-value">2-4 People</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <h5>Name:</h5>
                  <p class="property-value">John Doe Villa</p>
                </div>
                <div class="col-md-6">
                  <h5>Price:</h5>
                  <p class="property-value">Rp. 125.000</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <h5>Facilities:</h5>
                  <p class="property-value">Free Wifi</p>
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
      
</template>

<script>
    export default {
        name: 'DetailScreen',
        data() {
        return {
            showModal: false,
            rowData: {},
        };
    },
        methods: {
        bookNow() {
            this.showModal = false;
        },
    },
}
</script>

<style scoped>
    .container{
      justify-content: center;
    }
    .name-image {
        display: flex; 
        align-items: center;
        margin-top: 50px;
    }

    .name {
        text-align: left;
        flex: 1; 
    }

    .name-image img {
        max-width: 100%;
        height: auto;
        margin-right: 25px;
        margin-left: 25px;
    }
      
    .detail-property p {
        margin: 0;
        padding-right: 50px;
    }

    .description-features {
        display: flex;
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

      .img-slider{
        display: flex;
        justify-content: space-around;
      }
      .img-slider img {
        max-width: 100%;
        height: auto;
    }
      .description-features {
        display: flex;
        margin-top: 30px;
        text-align: left;
      }

      .description{
        flex: 2;
        margin-right: 50px;
      }

      .features-list{
        flex: 1;
      }

      .btn-book{
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;
        margin-bottom: 30px;
      }

      .btn-back{
        display: flex;
        justify-content: flex-start;
        margin-bottom: 30px;
        margin-right: auto;
      }

      .description-text span{
        margin-left: 100px;
      }
</style>
