<template>
  <div class="container">
    <h1 class="title">{{ msg }}</h1>
    <div class="list-input">
      <LoadNumber @updateLoadNumber="handleLoadNumberUpdate" class="input input-align" />
      <StartDate class="input" />
      <EndDate class="input" />
      <FilterInput class="input input-align" />
      <SortInput class="input input-align" />
      <SearchInput @update-search-term="updateSearchTerm" @search="performSearch" class="search-input" />
    </div>
    <ListProperty class="list-property"/>
  </div>
</template>




<script>
import LoadNumber from "@/components/listinputs/LoadNumber.vue";
import StartDate from "@/components/listinputs/StartDate.vue";
import EndDate from "@/components/listinputs/EndDate.vue";
import FilterInput from "@/components/listinputs/FilterInput.vue";
import SortInput from "@/components/listinputs/SortInput.vue";
import SearchInput from "@/components/listinputs/SearchInput.vue";
import ListProperty from '@/components/listproperty/ListProperty.vue';

export default {
  name: "VillaScreen",

  components: {
    StartDate,
    EndDate,
    LoadNumber,
    FilterInput,
    SortInput,
    SearchInput,
    ListProperty,
  },

  props: {
    msg: String,
  },
};
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

.list-property {
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
