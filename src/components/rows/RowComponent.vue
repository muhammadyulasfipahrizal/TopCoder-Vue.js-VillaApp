<template>
  <div class="container">
    <div class="list-input">
      <load-number @updateLoadNumber="handleLoadNumberChange" class="input input-align" />
      <StartDate v-model="selectedDate" class="input input-align"/>
      <FilterInput 
          class="input input-align" 
          @filter-location="locationFilter = $event"
          @filter-price="priceFilter = $event"
          @filter-capacity="capacityFilter = $event"
        />
      <SortInput @update-sort-order="handleSortOrderChange" class="input input-align" />
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
        @book-clicked="handleBookClicked"
      />
    <button class="btn btn-secondary btn-loadmore" @click="loadCount += 5">Load More +</button>
  </div>
</template>

<script>
import mitt from 'mitt';

import ListProperty from '../listproperty/ListProperty';
import LoadNumber from '../listinputs/LoadNumber';
import StartDate from "../listinputs/StartDate.vue";
import FilterInput from "../listinputs/FilterInput.vue";
import SortInput from "../listinputs/SortInput.vue";
import SearchInput from "../listinputs/SearchInput.vue";
import RowUi from './RowUi.vue';

import VillaData from './VillaData.js';

export default {
  name: "RowComponent",
  components: {
    RowUi,
    StartDate,
    FilterInput,
    SortInput,
    SearchInput,
    LoadNumber,
    ListProperty
  },
  props: {
    selectedRowsPerPage: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    numItemsToShow() {
      return this.selectedRowsPerPage + this.loadCount;
    },
    selectedDateFormatted() {
      if (!this.selectedDate) {
        return null;
      }
      const date = new Date(this.selectedDate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    },
    slicedVillas() {
      return this.filteredVillas.slice(0, this.numItemsToShow);
    },
    filteredVillas() {
      let filtered = this.villas;

      // filter by search term
      if (this.searchTerm !== '') {
        filtered = filtered.filter(villa => villa.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }

      // filter by selected date
      if (this.selectedDateFormatted) {
        console.log('selectedDateFormatted', this.selectedDateFormatted);
        filtered = filtered.filter(villa => villa.availableDates.includes(this.selectedDateFormatted));
      }

      // filter by selected location
      if (this.locationFilter !== '') {
        console.log('selected location', this.locationFilter);
        filtered = filtered.filter(villa => villa.location.toLowerCase().includes(this.locationFilter.toLowerCase()));
      }

      // filter by selected price range
      if (this.priceFilter !== '') {
        console.log('selected price', this.priceFilter);
        const [minPrice, maxPrice] = this.priceFilter.split('-');
        filtered = filtered.filter(villa => villa.price >= Number(minPrice) && villa.price <= Number(maxPrice));
      }

      // filter by selected capacity
      if (this.capacityFilter !== '') {
        console.log('selected capacity', this.locationFilter);
        const [minCapacity, maxCapacity] = this.capacityFilter.split('-');
        filtered = filtered.filter(villa => villa.capacity >= Number(minCapacity) && villa.capacity <= Number(maxCapacity));
      }

      // sort by selected order
      filtered = filtered.sort((a, b) => {
        switch (this.sortOrder) {
          case 'ascending':
            return a.name.localeCompare(b.name);
          case 'descending':
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
      return filtered;
  },
},
  watch: {
    selectedRowsPerPage() {
      this.$forceUpdate();
    },
    selectedDate() {
      console.log('selectedDate', this.selectedDate);
      this.emitter.emit('selected-date', this.selectedDate);
    }
  },
  methods: {
    performSearch() {
      this.$emit('update-search-term', this.searchTerm);
    },
    handleChange(event) {
        const selectedRowsPerPage = event.target.value;
        this.$emit('update:selected-rows-per-page', selectedRowsPerPage);
    },
    handleLoadNumberChange(loadNumber) {
      this.loadCount = loadNumber;
    },
    updateSearchTerm(term) {
      this.searchTerm = term;
    },
    handleSortOrderChange(sortOrder) {
      this.sortOrder = sortOrder;
    },
  },
  data() {
    return {
      searchTerm: '', 
      sortOrder: '',
      locationFilter: '',
      priceFilter: '',
      capacityFilter: '',
      villas: VillaData,
      selectedDate: null,
      loadCount: 0,
      emitter: mitt(),
    };
  },
  created() {
    this.emitter.on('selected-date', (date) => {
      console.log('selected-date received', date);
      this.filteredData = this.data.filter(item => item.date === date);
    });
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

.btn-loadmore {
  margin-bottom: 20px;
}

</style>