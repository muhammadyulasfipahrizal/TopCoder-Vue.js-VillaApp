<template>
  <div class="container">
    <div class="list-input">
      <load-number @updateLoadNumber="handleLoadNumberChange" class="input input-align" />
      <StartDate class="input" />
      <EndDate class="input" />
      <FilterInput class="input input-align" />
      <SortInput class="input input-align" />
      <SearchInput @update-search-term="updateSearchTerm" @search="performSearch" class="search-input" />
    </div>
    <ListProperty/>
    <RowUi
      v-for="villa in slicedVillas"
      :key="villa.id"
      :image-url="villa.imageUrl"
      :name="villa.name"
      :location="villa.location"
      :price="villa.price"
      :capacity="villa.capacity"
      :amenities="villa.amenities"
    />
  </div>
</template>

<script>
import RowUi from './RowUi.vue';
import LoadNumber from '../listinputs/LoadNumber';
import StartDate from "../listinputs/StartDate.vue";
import EndDate from "../listinputs/EndDate.vue";
import FilterInput from "../listinputs/FilterInput.vue";
import SortInput from "../listinputs/SortInput.vue";
import SearchInput from "../listinputs/SearchInput.vue";
import ListProperty from '../listproperty/ListProperty'


export default {
  name: "RowComponent",
  components: {
    RowUi,
    StartDate,
    EndDate,
    LoadNumber,
    FilterInput,
    SortInput,
    SearchInput,
    ListProperty
  },
  props: {
    selectedRowsPerPage: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    slicedVillas() {
      return this.villas.slice(0, this.selectedRowsPerPage);
    },
  },
  watch: {
    selectedRowsPerPage() {
      this.$forceUpdate();
    },
  },
  methods: {
    handleChange(event) {
        const selectedRowsPerPage = event.target.value;
        this.$emit('update:selected-rows-per-page', selectedRowsPerPage);
    },
    handleLoadNumberChange(loadNumber) {
      this.$emit('update:selected-rows-per-page', loadNumber);
    },
  },
  data() {
    return {
      villas: [
        {
            id: 1,
            imageUrl: '../../assets/logo.png',
            name: 'John Doe Villa',
            location: 'Balikpapan',
            price: 'Rp 125.000',
            capacity: '2-4 People',
            amenities: 'Toilet, Free Wifi',
        },
        {
            id: 2,
            imageUrl: '../../assets/logo.png',
            name: 'Jane Smith Villa',
            location: 'Jakarta',
            price: 'Rp 200.000',
            capacity: '4-6 People',
            amenities: 'Toilet, Free Wifi, Private Pool',
        },
        {
            id: 3,
            imageUrl: '../../assets/logo.png',
            name: 'Bali Paradise Villa',
            location: 'Seminyak, Bali',
            price: 'Rp 350.000',
            capacity: '6-8 People',
            amenities: 'Toilet, Free Wifi, Private Beach Access',
        },
        {
            id: 4,
            imageUrl: '../../assets/logo.png',
            name: 'Mountain View Chalet',
            location: 'Puncak, West Java',
            price: 'Rp 175.000',
            capacity: '2-4 People',
            amenities: 'Toilet, Free Wifi, Fireplace',
        },
        {
            id: 5,
            imageUrl: '../../assets/logo.png',
            name: 'Lombok Seaside Bungalow',
            location: 'Senggigi, Lombok',
            price: 'Rp 220.000',
            capacity: '4-6 People',
            amenities: 'Toilet, Free Wifi, Swimming Pool',
        },
        {
            id: 6,
            imageUrl: '../../assets/logo.png',
            name: 'Kuta Beach Resort',
            location: 'Kuta, Bali',
            price: 'Rp 300.000',
            capacity: '6-8 People',
            amenities: 'Toilet, Free Wifi, Spa',
        },
        {
            id: 7,
            imageUrl: '../../assets/logo.png',
            name: 'Tropical Island Villa',
            location: 'Gili Trawangan, Lombok',
            price: 'Rp 400.000',
            capacity: '8-10 People',
            amenities: 'Toilet, Free Wifi, Private Beach',
        },
        {
            id: 8,
            imageUrl: '../../assets/logo.png',
            name: 'City View Apartment',
            location: 'Central Jakarta',
            price: 'Rp 150.000',
            capacity: '2-4 People',
            amenities: 'Toilet, Free Wifi, Gym',
        },
        {
            id: 9,
            imageUrl: '../../assets/logo.png',
            name: 'Luxury Pool Villa',
            location: 'Nusa Dua, Bali',
            price: 'Rp 500.000',
            capacity: '8-10 People',
            amenities: 'Toilet, Free Wifi, Private Pool, Sea View',
        },
        {
            id: 10,
            imageUrl: '../../assets/logo.png',
            name: 'Cottage in the Woods',
            location: 'Bandung, West Java',
            price: 'Rp 200.000',
            capacity: '4-6 People',
            amenities: 'Toilet, Free Wifi, BBQ',
        },
        {
            id: 11,
            imageUrl: '../../assets/logo.png',
            name: 'Jogja Traditional House',
            location: 'Yogyakarta, Java',
            price: 'Rp 175.000',
            capacity: '2-4 People',
            amenities: 'Toilet, Free Wifi, Garden',
        },
        {
            id: 12,
            imageUrl: '../../assets/logo.png',
            name: 'Surfing Beach House',
            location: 'Canggu, Bali',
            price: 'Rp 250.000',
            capacity: '4-6 People',
            amenities: 'Toilet, Free Wifi, Surfboards',
        },
        {
            id: 13,
            imageUrl: '../../assets/logo.png',
            name: 'Villa Puncak Panorama',
            location: 'Puncak, West Java',
            price: 'Rp 450.000',
            capacity: '8-10 People',
            amenities: 'Toilet, Free Wifi, Swimming Pool, Mountain View',
        },
        {
            id: 14,
            imageUrl: '../../assets/logo.png',
            name: 'Treehouse Retreat',
            location: 'Ubud, Bali',
            price: 'Rp 300.000',
            capacity: '2-4 People',
            amenities: 'Toilet, Free Wifi, Jungle View',
        },
        {
            id: 15,
            imageUrl: '../../assets/logo.png',
            name: 'Villa Bukit Indah',
            location: 'Jimbaran, Bali',
            price: 'Rp 550.000',
            capacity: '8-10 People',
            amenities: 'Toilet, Free Wifi, Private Pool, Ocean View',
        },
        {
            id: 16,
            imageUrl: '../../assets/logo.png',
            name: 'Riverside Cabin',
            location: 'Sungai Liat, Bangka Belitung',
            price: 'Rp 175.000',
            capacity: '2-4 People',
            amenities: 'Toilet, Free Wifi, Fishing',
        },
        {
            id: 17,
            imageUrl: '../../assets/logo.png',
            name: 'Tropical Retreat',
            location: 'Gili Air, Lombok',
            price: 'Rp 350.000',
            capacity: '6-8 People',
            amenities: 'Toilet, Free Wifi, Private Pool, Beach Access',
        },
        {
            id: 18,
            imageUrl: '../../assets/logo.png',
            name: 'Villa Tanjung Putus',
            location: 'Anyer, Banten',
            price: 'Rp 400.000',
            capacity: '8-10 People',
            amenities: 'Toilet, Free Wifi, Private Pool, Beachfront',
        },
        {
            id: 19,
            imageUrl: '../../assets/logo.png',
            name: 'City Center Apartment',
            location: 'Surabaya, East Java',
            price: 'Rp 250.000',
            capacity: '4-6 People',
            amenities: 'Toilet, Free Wifi, Gym, City View',
        },
        {
            id: 20,
            imageUrl: '../../assets/logo.png',
            name: 'Traditional Houseboat',
            location: 'Banjarmasin, South Kalimantan',
            price: 'Rp 300.000',
            capacity: '2-4 People',
            amenities: 'Toilet, Free Wifi, River View, Canoe',
        },
      ],
    };
  },
}
</script>

<style scoped>
.container {
  justify-content: center;
}

.title {
  margin-bottom: 40px;
}

.list-input {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.rows {
  justify-content: start;
}

.input {
  margin-right: 10px;
}

.input-align {
  margin-top: 23px
}

.search-input {
  margin-top: 40px;
}
</style>