<template>
  <div class="container">
    <h1 class="title">{{ msg }}</h1>
    <div class="inputs">
      <LoadNumber @updateLoadNumber="handleLoadNumberUpdate" class="input input-align" />
      <StartDate class="input" />
      <EndDate class="input" />
      <FilterInput class="input input-align" />
      <SortInput class="input input-align" />
      <SearchInput @update-search-term="updateSearchTerm" @search="performSearch" class="search-input" />
    </div>
  </div>
</template>




<script>
import LoadNumber from "@/components/listinputs/LoadNumber.vue";
import StartDate from "@/components/listinputs/StartDate.vue";
import EndDate from "@/components/listinputs/EndDate.vue";
import FilterInput from "@/components/listinputs/FilterInput.vue";
import SortInput from "@/components/listinputs/SortInput.vue";
import SearchInput from "@/components/listinputs/SearchInput.vue";

export default {
  name: "VillaScreen",

  components: {
    StartDate,
    EndDate,
    LoadNumber,
    FilterInput,
    SortInput,
    SearchInput,
  },

  props: {
    msg: String,
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  margin-bottom: 40px;
}

.inputs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
