<template>
  <div class="container">
    <div class="list-input">
      <load-number @updateLoadNumber="handleLoadNumberChange" class="input input-align" />
      <StartDate v-model="selectedDate" class="input input-align"/>
      <FilterInput class="input input-align" />
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
    />
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
      return this.filteredVillas.slice(0, this.selectedRowsPerPage);
    },
    filteredVillas() {
      let filtered = this.villas;

      // filter by search term
      if (this.searchTerm !== '') {
        filtered = filtered.filter(villa => villa.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }

      // filter by selected date
      if (this.selectedDateFormatted) {
        filtered = filtered.filter(villa => villa.availableDates.includes(this.selectedDateFormatted));
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
      this.$emit('update:selected-rows-per-page', loadNumber);
    },
    updateSearchTerm(term) {
      this.searchTerm = term;
    },
    handleSortOrderChange(sortOrder) {
      this.sortOrder = sortOrder;
    }
  },
  data() {
    return {
      searchTerm: '',
      sortOrder: '',
      villas: VillaData,
      selectedDate: null,
      emitter: mitt(),
    };
  },
  created() {
    this.emitter.on('selected-date', (date) => {
      this.selectedDate = date;
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
</style>