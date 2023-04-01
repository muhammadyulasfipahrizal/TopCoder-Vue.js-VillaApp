<template>
  <div class="container">
    <h1 class="title">Welcome To Pahri's Topcoder Vue.js Villa App</h1>
    <RowComponent :selected-rows-per-page="selectedRowsPerPage" @update:selected-rows-per-page="handleSelectedRowsPerPageUpdate"  />
  </div>
</template>

<script>
import RowComponent from "@/components/rows/RowComponent.vue";

export default {
  name: "VillaScreen",

  components: {
    RowComponent,
  },

  props: {
    msg: String,
  },
  data() {
    return {
      selectedRowsPerPage: 5,
    };
  },
  methods: {
    handleSelectedRowsPerPageUpdate(selectedRowsPerPage) {
      this.selectedRowsPerPage = selectedRowsPerPage;
    },
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
