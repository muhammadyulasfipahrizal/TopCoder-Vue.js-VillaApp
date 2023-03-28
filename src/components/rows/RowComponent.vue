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
import ListProperty from '../listproperty/ListProperty';

import VillaData from './VillaData.js';


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
      return this.filteredVillas.slice(0, this.selectedRowsPerPage);
    },
    filteredVillas() {
      let filtered = this.villas;
      if (this.searchTerm !== '') {
        filtered = filtered.filter(villa => villa.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }
      filtered = filtered.sort((a, b) => {
        if (this.sortOrder === 'asc') {
          return a[this.sortBy] - b[this.sortBy];
        } else {
          return b[this.sortBy] - a[this.sortBy];
        }
      });
      return filtered;
    }
  },
  watch: {
    selectedRowsPerPage() {
      this.$forceUpdate();
    },
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
    }
  },
  data() {
    return {
      searchTerm: '',
      villas: VillaData,
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